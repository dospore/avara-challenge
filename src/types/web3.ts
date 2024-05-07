import { arbitrum, arbitrumSepolia, base, mantle } from "wagmi/chains";

export type SupportedNetwork = typeof arbitrum.id | typeof arbitrumSepolia.id | typeof base.id | typeof mantle.id;
