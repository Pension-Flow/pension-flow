import "antd/dist/reset.css";
import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import type { AppProps } from "next/app";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import CustomLayout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const { chains, provider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "Pension Flow",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} initialChain={polygonMumbai}>
        <CustomLayout>
          <Component {...pageProps} />
        </CustomLayout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
