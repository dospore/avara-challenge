import { decodeEventLog, parseAbi } from "viem";
import { useWatchContractEvent } from "wagmi";
import { arbitrum, avalanche, base, mainnet, optimism, polygon } from "wagmi/chains";
import pool_abi from "../contracts/pool.ts";
import { useChainConfig } from "./useChainConfig";

export const usePoolEvent = (name: string, callback: (logs: any) => void) => {
  useMultiChainPoolEvent(name, arbitrum.id, callback);
  useMultiChainPoolEvent(name, avalanche.id, callback);
  useMultiChainPoolEvent(name, base.id, callback);
  useMultiChainPoolEvent(name, mainnet.id, callback);
  useMultiChainPoolEvent(name, optimism.id, callback);
  useMultiChainPoolEvent(name, polygon.id, callback);
};

export const useMultiChainPoolEvent = (name: string, chainId: SupportedNetwork, callback: (logs: any) => void) => {
  const chainConfig = useChainConfig(chainId);

  useWatchContractEvent({
    address: chainConfig.poolAddress,
    abi: pool_abi,
    chainId: chainConfig.chainId,
    eventName: name,
    // TODO this is naive since there can be multiple in the logs
    // should process all
    onLogs: (logs) => callback({ ...logs[0], chainId }),
  });
};
