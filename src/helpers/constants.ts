import { arbitrum, avalanche, base, mainnet, optimism, polygon } from "wagmi/chains";

export const SUPPORTED_CHAINS = [arbitrum.id, avalanche.id, base.id, mainnet.id, optimism.id, polygon.id];

export const COLORS: Record<SupportedChain, string> = {
  [arbitrum.id]: "blue",
  [avalanche.id]: "red",
  [base.id]: "blue",
  [mainnet.id]: "gray",
  [optimism.id]: "red",
  [polygon.id]: "purple",
};

export const REQUIRED_POINTS_TO_WIN = 10;
