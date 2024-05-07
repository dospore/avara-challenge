import { getBlock } from "@wagmi/core";
import { useEffect } from "react";
import { decodeEventLog, parseAbi } from "viem";
import { usePublicClient, useConfig as useWagmiConfig, useWatchContractEvent } from "wagmi";
import pool_abi from "../contracts/pool.ts";
import { useChainConfig } from "./useChainConfig";

type Props = {
  from?: bigint;
  to?: bigint;
};

/// @dev this is some old stuff thats no longer used was going to be used for bridge sluth

export const usePastEvents = ({ from, to }: Props) => {
  const config = useWagmiConfig();
  const chainConfig = useChainConfig();
  const publicClient = usePublicClient();

  useEffect(() => {
    getBlock(config)
      .then((block) => {
        return publicClient.getLogs({
          address: chainConfig.poolAddress,
          events: parseAbi([
            "event Supply(address indexed reserve, address user, address indexed onBehalfOf, uint256 amount, uint16 indexed referralCode)",
            "event Withdraw(address indexed reserve, address indexed user, address indexed to, uint256 amount)",
            "event Borrow(address indexed reserve, address user, address indexed onBehalfOf, uint256 amount, uint interestRateMode, uint256 borrowRate, uint16 indexed referralCode)",
            "event Repay(address indexed reserve, address indexed user, address indexed repayer, uint256 amount, bool useATokens)",
          ]),
          fromBlock: block.number - 1000n,
          toBlock: block.number,
        });
      })
      .then((logs) => {
        const decodedLogs = logs.map((log) =>
          decodeEventLog({
            abi: pool_abi,
            ...log,
          }),
        );
        console.log("Got topics", decodedLogs);
      });
  }, [chainConfig.chainId]);
};
