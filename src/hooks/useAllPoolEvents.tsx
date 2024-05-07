import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import ToastTitleBox from "../components/ToastTitleBox";
import pool_abi from "../contracts/pool.ts";
import { parseEvent } from "../helpers/events";
import { useRaceStore } from "../stores/raceStore";
import { BaseEvent, type Borrow, EventType, type Repay, type Supply, type Withdraw } from "../types/pools";
import { SupportedNetwork } from "../types/web3";

import { useChainConfig } from "./useChainConfig";
import { usePoolEvent } from "./usePoolEvent";

export const useAllPoolEvents = () => {
  const toast = useToast();
  const store = useRaceStore();

  // TODO validate type on Parse
  usePoolEvent("Withdraw", (log) => store.pushEvent(parseEvent<Withdraw>(log, EventType.Withdraw)));
  usePoolEvent("Borrow", (log) => store.pushEvent(parseEvent<Borrow>(log, EventType.Borrow)));
  usePoolEvent("Repay", (log) => store.pushEvent(parseEvent<Repay>(log, EventType.Repay)));
  usePoolEvent("Supply", (log) => store.pushEvent(parseEvent<Supply>(log, EventType.Supply)));

  useEffect(() => {
    const e = store.lastEvent;
    if (store.isPaused) {
      return;
    }
    if (e.points < 1) {
      toast({
        title: <ToastTitleBox chainId={e.chainId} points={e.points} type={e.type} />,
        description: "You are lucky this is not negative",
        status: "warning",
        position: "bottom-right",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        title: <ToastTitleBox chainId={e.chainId} points={e.points} type={e.type} />,
        status: "success",
        position: "bottom-right",
        duration: 4000,
        isClosable: true,
      });
    }
  }, [store.lastEvent]);

  useEffect(() => {
    if (store.partyPoints !== 0) {
      toast({
        title: `Party points +1 to all`,
        description: "Let's get this thing moving",
        status: "success",
        position: "bottom-right",
        duration: 4000,
        isClosable: true,
      });
    }
  }, [store.partyPoints]);

  useEffect(() => {
    if (store.winner) {
      toast({
        title: `Winner winner chicken dinner`,
        description: `Congrats ${store.winner} fanboys`,
        status: "success",
        position: "bottom-right",
        duration: 4000,
        isClosable: true,
      });
    }
  }, [store.winner]);

  return store.allEvents;
};
