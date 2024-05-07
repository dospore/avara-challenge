import { useEffect } from "react";
import { useRaceStore } from "../stores/raceStore";
import type { SupportedNetwork } from "../types/web3";

export const useRacers = (): {
  racers: { chainId: SupportedNetwork; position: number }[];
  winner: SupportedNetwork | undefined;
  selectedRacer: SupportedNetwork;
  isPaused: boolean;
} => {
  const store = useRaceStore();

  const chains = Object.keys(store.positions);

  const racers = chains.map((chain) => ({
    chainId: chain,
    ...store.positions[chain],
  }));

  return {
    racers,
    isPaused: store.isPaused,
    selectedRacer: store.selectedRacer,
    winner: store.winner,
  };
};
