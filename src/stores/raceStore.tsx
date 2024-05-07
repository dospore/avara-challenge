import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { type Event, EventType } from "../types/pools";
import type { SupportedNetwork } from "../types/web3";

import { REQUIRED_POINTS_TO_WIN, SUPPORTED_CHAINS } from "../helpers/constants.ts";

interface RaceStore {
  // state
  allEvents: Event[];
  lastEvent: Event | undefined;
  positions: Record<
    SupportedNetwork,
    {
      position: number;
      activityCount: number;
    }
  >;
  partyPoints: number;
  selectedRacer: SupportedNetwork | undefined;
  winner: SupportedNetwork | undefined;
  isPaused: boolean;
  timerId: number;

  // actions
  incPositions: () => void;
  adjustPosition: (points: number, chainId: SupportedNetwork) => void;
  startRace: (chainId: SupportedNetwork) => void;
  finishRace: () => void;
  resetRace: () => void;
}

const EVENT_TYPE_MAP: Record<EventType, "withdrawals" | "supplies" | "borrows" | "repays"> = {
  [EventType.Withdraw]: "withdrawals",
  [EventType.Repay]: "repays",
  [EventType.Borrow]: "borrows",
  [EventType.Supply]: "supplies",
};

const EVENT_TYPE_POINTS: Record<EventType, number> = {
  [EventType.Withdraw]: 0.5,
  [EventType.Repay]: 1,
  [EventType.Borrow]: 2,
  [EventType.Supply]: 2,
};

const startingPositions = SUPPORTED_CHAINS.reduce(
  (o, chain: SupportedNetwork) => {
    o[chain] = {
      position: 0,
      activityCount: 0,
    };
    return o;
  },
  {} as Record<SupportedNetwork, { position: number; activityCount: number }>,
);

export const useRaceStore = create<RaceStore>()(
  immer((set, get) => ({
    allEvents: [],
    positions: { ...startingPositions },
    timerId: 0,
    isPaused: true,
    partyPoints: 0,
    lastEvent: undefined,
    winner: undefined,
    selectedRacer: undefined,
    pushEvent: (e: Event) => {
      console.log("Processing event", e);

      if (get().isPaused) {
        console.debug("Recieved event but game is paused", e);
        return;
      }

      const key = EVENT_TYPE_MAP[e.type];
      if (!key) {
        console.debug(`Invalid event key type: ${e.type}, not updating state`);
      }

      const points = EVENT_TYPE_POINTS[e.type];
      // @ts-ignore hacky points add
      e.points = points;

      get().adjustPosition(points, e.chainId);

      set((state) => {
        state.allEvents = [e, ...state.allEvents];
        state.lastEvent = e;
      });
    },
    adjustPosition: (points: number, chainId: SupportedNetwork) => {
      set((state) => {
        state.positions[chainId].position += points;
        console.log(`Updated points ${chainId} +${points} -> ${state.positions[chainId].position}`);
      });
      if (get().positions[chainId].position >= REQUIRED_POINTS_TO_WIN) {
        set((state) => {
          console.log(`We have a winner!! ${chainId} takes it`);
          state.winner = chainId;
        });
        get().finishRace();
      }
    },
    incPositions: () => {
      for (const chainId of Object.keys(get().positions)) {
        // @ts-ignore chainId is fine here
        get().adjustPosition(1, chainId);
      }
      set((state) => {
        state.partyPoints += 1;
      });
    },
    startRace: (chainId: SupportedNetwork) => {
      get().incPositions();
      const timerId = setInterval(async () => {
        get().incPositions();
        // called every three seconds
      }, 10000);
      const currentTimer = get().timerId;
      if (currentTimer !== 0) {
        clearInterval(currentTimer);
      }
      console.log(`Starting race with hero: ${chainId}`);
      set((state) => {
        state.isPaused = false;
        // @ts-ignore timerId is numbery
        state.timerId = timerId;
        state.selectedRacer = chainId;
      });
    },
    finishRace: () => {
      const currentTimer = get().timerId;
      if (currentTimer !== 0) {
        clearInterval(currentTimer);
      }
      set((state) => {
        state.isPaused = true;
        state.timerId = 0;
      });
    },
    resetRace: () => {
      const currentTimer = get().timerId;
      if (currentTimer !== 0) {
        clearInterval(currentTimer);
      }
      set((state) => {
        state.isPaused = true;
        state.timerId = 0;
        state.selectedRacer = undefined;
        state.winner = undefined;
        state.lastEvent = undefined;
        state.allEvents = [];
        // @ts-ignore
        state.positions = { ...startingPositions };
      });
    },
  })),
);
