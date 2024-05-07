import type { arbitrum, avalanche, base, mainnet, optimism, polygon } from "wagmi/chains";

export type SupportedNetwork =
  | typeof mainnet.id
  | typeof arbitrum.id
  | typeof avalanche.id
  | typeof base.id
  | typeof optimism.id
  | typeof polygon.id;
