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
                <span className="px-2 text-2xl uppercase hover:bg-zinc-800 hover:text-prim">
                  [ {ensName ?? truncatedAddress} ]
                </span>
              ) : (
                <span className="px-2 text-2xl uppercase hover:bg-zinc-800 hover:text-prim">
                  [ sign in ]
                </span>
              )
            ) : (
              <span className="px-2 text-2xl uppercase hover:bg-zinc-800 hover:text-prim">
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
