"use client";

import ConnectButton from "@/components/web3/connect-button";
import Link from "next/link";
import { useAccount } from "wagmi";
import Owner from "./owner";
import checkOwner from "@/lib/zora-api/check-owner";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useSIWE } from "connectkit";
import Lenis from "@studio-freight/lenis";

type Props = {
  sold?: number;
};

type TokenData = {
  isOwner: boolean;
  name: string;
  owner: string;
  tokenId: string;
};

const RedeemPage = ({ sold }: Props) => {
  const { address } = useAccount();
  const { isSignedIn } = useSIWE();

  const [ownerToken, setOwnerToken] = useState<TokenData | null>(null);

  const nullTokenData: TokenData = {
    isOwner: false,
    name: "",
    owner: "",
    tokenId: "",
  };

  const getOwnerToken = useCallback(async () => {
    if (!address) return null;

    try {
      const { isOwner, name, owner, tokenId } = await checkOwner(
        address.toLowerCase(),
      );
      const tokenData: TokenData = {
        isOwner,
        name,
        owner,
        tokenId,
      };
      if (isOwner) {
        setOwnerToken(tokenData);
      } else {
        setOwnerToken(nullTokenData);
      }
    } catch (error) {
      console.log(error);
    }
  }, [address]);

  const handleCheckOwner = async () => {
    await getOwnerToken();
  };

  useEffect(() => {
    if (isSignedIn && address) {
      getOwnerToken();
    }
    return () => {
      setOwnerToken(nullTokenData);
    };
  }, [address, isSignedIn]);

  const lenis = new Lenis();
  useEffect(() => {
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div
        id="main"
        className="relative flex min-h-screen flex-col items-center justify-between bg-zinc-800  px-12 py-8 text-zinc-200"
      >
        <div className="flex w-full flex-row items-center justify-between gap-8 font-chakra text-xl">
          <span>REDEEM PHASE</span>
          <ConnectButton />
        </div>
        <div className="flex flex-col items-center justify-around gap-10 font-jetbrains">
          <Suspense fallback={<div>Loading...</div>}>
            <span className="font-chakra text-9xl uppercase text-prim">
              {isSignedIn
                ? ownerToken?.isOwner
                  ? "Eligible"
                  : "Not eligible"
                : "-=-++-=+"}
            </span>
          </Suspense>
          {/* <button onClick={handleCheckOwner} className="text-zinc-200">
          CHECK REDEEM STATUS
        </button> */}
          {/* {ownerToken && (
          <p className="text-prim">{JSON.stringify(ownerToken)}</p>
        )} */}

          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-col items-center justify-around gap-4 font-jetbrains uppercase">
              <Link href="#form" className="text-3xl">
                {isSignedIn
                  ? ownerToken && ownerToken.isOwner
                    ? "Proceed"
                    : "Get one on secondary"
                  : "Please sign in"}
              </Link>
            </div>
          </Suspense>
        </div>
        <div className="flex w-full flex-row items-center justify-between gap-8 font-chakra text-xl ">
          <div className="border-2 border-prim px-8 py-2 text-center text-prim">
            <h1 className="">ONLINE</h1>
          </div>
          <Link href="/">
            <span>BACK TO HOME</span>
          </Link>
        </div>
      </div>
      <div
        id="form"
        className="relative flex min-h-screen flex-col items-center justify-between bg-zinc-800  px-12 py-8 text-zinc-200"
      >
        <span></span>
        <span>FORM</span>
        <span></span>
      </div>
    </>
  );
};

export default RedeemPage;
