import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { http, WagmiProvider, createConfig } from "wagmi";
import { arbitrum, avalanche, base, mainnet, optimism, polygon } from "wagmi/chains";
import type { Children } from "../types/react";

export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [arbitrum, avalanche, base, mainnet, optimism, polygon],
    transports: {
      [arbitrum.id]: http(import.meta.env.VITE_PUBLIC_ARBITRUM_RPC),
      [avalanche.id]: http(import.meta.env.VITE_PUBLIC_AVALANCHE_RPC),
      [base.id]: http(import.meta.env.VITE_PUBLIC_BASE_RPC),
      [mainnet.id]: http(import.meta.env.VITE_PUBLIC_MAINNET_RPC),
      [optimism.id]: http(import.meta.env.VITE_PUBLIC_OPTIMISM_RPC),
      [polygon.id]: http(import.meta.env.VITE_PUBLIC_POLYGON_RPC),
    },

    // Required API Keys
    walletConnectProjectId: import.meta.env.VITE_PUBLIC_WALLETCONNECT_PROJECT_ID,

    // Required App Info
    appName: "Dospore React Web3 Boilerplate",

    // Optional App Info
    appDescription: "Dospore React Web3 Boilerplate",
    // appUrl: "https://family.co", // your app's url
    // appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

const queryClient = new QueryClient();

const Web3Provider = ({ children }: Children) => {
  return (
    // @ts-ignore
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Web3Provider;
