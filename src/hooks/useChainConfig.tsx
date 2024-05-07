import { useMemo } from "react";
import { useChainId } from "wagmi";
import { arbitrum, avalanche, base, mainnet, optimism, polygon } from "wagmi/chains";
import type { SupportedNetwork } from "../types/web3";

type Config = {
  chainId: SupportedNetwork;
  poolAddress: string;
};

const CONFIG: Record<SupportedNetwork> = {
  [arbitrum.id]: {
    chainId: arbitrum.id,
    poolAddress: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
  },
  [avalanche.id]: {
    chainId: avalanche.id,
    poolAddress: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
  },
  [base.id]: {
    chainId: base.id,
    poolAddress: "0xA238Dd80C259a72e81d7e4664a9801593F98d1c5",
  },
  [mainnet.id]: {
    chainId: mainnet.id,
    poolAddress: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
  },
  [optimism.id]: {
    chainId: optimism.id,
    poolAddress: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
  },
  [polygon.id]: {
    chainId: polygon.id,
    poolAddress: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
  },
};

const DEFAULT_CONFIG = CONFIG[mainnet.id];

export const useChainConfig = (chainId_?: SupportedNetwork): Config => {
  const wagmiChainId = useChainId();
  const chainId = chainId_ ?? wagmiChainId;

  return useMemo(() => CONFIG[chainId] ?? DEFAULT_CONFIG, [chainId]);
};
