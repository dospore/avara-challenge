import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useChainId } from "wagmi";
import { useRaceStore } from "../stores/raceStore";

export const useControls = (): {
  startRace: () => void;
  endRace: () => void;
  resetRace: () => void;
} => {
  const toast = useToast();
  const chainId = useChainId();
  const store = useRaceStore();

  const startRace = () => {
    toast({
      title: `The race is on`,
      status: "success",
      position: "bottom-right",
      duration: 4000,
      isClosable: true,
    });
    store.startRace(chainId);
  };

  const endRace = () => {
    toast({
      title: `Not so easy`,
      description: '"Funds are locked". Gamble responsibly',
      status: "error",
      position: "bottom-right",
      duration: 4000,
      isClosable: true,
    });
    // store.endRace()
  };

  const resetRace = () => {
    toast({
      title: `Reset race`,
      description: "Choose your racer and do it all again....",
      status: "info",
      position: "bottom-right",
      duration: 4000,
      isClosable: true,
    });
    store.resetRace();
  };

  return {
    startRace,
    endRace,
    resetRace,
  };
};
