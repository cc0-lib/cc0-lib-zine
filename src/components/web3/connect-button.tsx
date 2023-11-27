"use client";

import { ConnectKitButton, useSIWE } from "connectkit";
import { Shield, ShieldAlert, ShieldCheck } from "lucide-react";

const ConnectButton = () => {
  const { isSignedIn }: { isSignedIn: boolean } = useSIWE();

  return (
    <ConnectKitButton.Custom>
      {({
        isConnected,
        isConnecting,
        show,
        hide,
        address,
        ensName,
        truncatedAddress,
        chain,
      }) => {
        return (
          <button
            aria-label="Connect to wallet"
            onClick={show}
            className="flex items-center"
          >
            {isConnected ? (
              isSignedIn ? (
                <span className="px-2 text-base uppercase hover:bg-zinc-800 hover:text-prim sm:text-2xl">
                  [ {ensName ?? truncatedAddress} ]
                </span>
              ) : (
                <span className="px-2 text-base uppercase hover:bg-zinc-800 hover:text-prim sm:text-2xl">
                  [ sign in ]
                </span>
              )
            ) : (
              <span className="px-2 text-base uppercase hover:bg-zinc-800 hover:text-prim sm:text-2xl">
                [ connect ]
              </span>
            )}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
export default ConnectButton;
