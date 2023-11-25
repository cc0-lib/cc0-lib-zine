"use client";

import { SiweClient } from "@/lib/siwe/client";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { WagmiConfig, createConfig } from "wagmi";
import { mainnet, zora, zoraTestnet } from "wagmi/chains";

const chains = [mainnet, zora, zoraTestnet];

const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID,
    walletConnectProjectId: process.env
      .NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
    appName: "CC0-LIB-ZINE",
    appDescription: "CC0-LIB ZINE SPECIAL EDITION 01",
    appUrl: "https://zine.cc0-lib.wtf",
    appIcon: "https://cc0-lib.wtf/cc0-lib-circle.png",
    chains,
  }),
);

type Web3ProviderProps = {
  children: React.ReactNode;
};

const Web3Provider = ({ children }: Web3ProviderProps) => {
  return (
    <WagmiConfig config={config}>
      <SiweClient.Provider
        // Optional parameters
        enabled={true} // defaults true
        nonceRefetchInterval={300000} // in milliseconds, defaults to 5 minutes
        sessionRefetchInterval={300000} // in milliseconds, defaults to 5 minutes
        signOutOnDisconnect={true} // defaults true
        signOutOnAccountChange={true} // defaults true
        signOutOnNetworkChange={false} // defaults true
        // onSignIn={(session) => {
        //   console.log(session);
        // }}
        // onSignOut={() => {
        //   console.log("sign out");
        // }}
      >
        <ConnectKitProvider
          mode="dark"
          customTheme={{
            "--ck-font-family": "Jetbrains Mono",
            "--ck-accent-color": "#E9FF5F",
            "--ck-accent-text-color": "#292929",
          }}
        >
          {children}
        </ConnectKitProvider>
      </SiweClient.Provider>
    </WagmiConfig>
  );
};

export default Web3Provider;
