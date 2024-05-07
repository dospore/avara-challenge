import { arbitrum, avalanche, base, mainnet, optimism, polygon } from "wagmi/chains";

export const toExplorer = (hash: string, chainId: SupportedNetwork): string => {
  switch (chainId) {
    case mainnet.id:
      return `https://etherscan.io/tx/${hash}`;
    case arbitrum.id:
      return `https://arbiscan.io/tx/${hash}`;
    case avalanche.id:
      return `https://snowtrace.io/tx/${hash}`;
    case base.id:
      return `https://basescan.org/tx/${hash}`;
    case optimism.id:
      return `https://optimistic.etherscan.io/tx/${hash}`;
    case polygon.id:
      return `https://polygonscan.com/tx/${hash}`;
  }
  return "";
};
