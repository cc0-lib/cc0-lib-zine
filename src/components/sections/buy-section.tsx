"use client";

import { CHAIN, MINT_PRICE, TEST_ZORA_URL, ZORA_URL } from "@/lib/constants";
import { formatBalance } from "@/lib/utils/web3";
import { ChainIcon, useModal, useSIWE } from "connectkit";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { useAccount, useBalance, useEnsName, useNetwork } from "wagmi";
import { motion as m } from "framer-motion";

type Props = {
  sold: number;
  live: boolean;
};

const stagChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const AnimFadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};
const AnimImageIn = {
  hidden: {
    opacity: 0,
    // clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  },
  visible: {
    opacity: 1,
    // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const BuySection = ({ sold, live }: Props) => {
  const { isSignedIn } = useSIWE();
  const { isConnected, address } = useAccount();
  const {
    data: balance,
    isError: isBalanceError,
    isLoading: isBalanceLoading,
  } = useBalance({
    address,
    formatUnits: "ether",
  });
  const { chain } = useNetwork();

  const { openOnboarding, setOpen, openSwitchNetworks, openSIWE } = useModal();

  const checkBalanceEnough = () => {
    if (balance) {
      if (
        (formatBalance(balance?.formatted, 3, "number") as number) > MINT_PRICE
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const mintNFT = async () => {};

  return (
    <div
      id="buy"
      className="s3 flex h-screen w-full flex-row justify-around font-chakra"
    >
      <div className="flex h-auto w-full flex-col items-center justify-around p-12">
        <m.div
          variants={stagChildren}
          initial="hidden"
          whileInView="visible"
          className="h-auto w-full items-center justify-center"
        >
          <m.div
            variants={AnimFadeIn}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm">SPECIAL EDITION 01</span>
            <span className="text-5xl font-medium">CC0-LIB ZINE</span>
          </m.div>
          <m.div
            variants={AnimFadeIn}
            className="mt-16 flex flex-col items-center"
          >
            <p className="max-w-prose px-12 text-center font-jetbrains">
              A celebration of creativity and artistic expression. Inside this
              zine, you will discover a creative haven that explores the
              captivating Nouns ecosystem, a curated collection of artworks from
              talented Nouns artists showcasing their unique visions and talents
              and the powerful influence of the creative commons zero ethos.
            </p>
          </m.div>
        </m.div>
        {live && (
          <m.div
            variants={stagChildren}
            initial="hidden"
            whileInView="visible"
            className="flex w-full flex-col items-center text-center "
          >
            <Divider className="mb-8 max-w-xs" />
            <m.span variants={AnimFadeIn} className="text-5xl font-medium">
              {sold}/50
            </m.span>
            <m.span variants={AnimFadeIn} className="text-lg uppercase">
              {sold == 50 ? "sold out" : "minted"}
            </m.span>
            <Divider className="mt-2 max-w-xs" />
          </m.div>
        )}

        <m.div
          variants={stagChildren}
          initial="hidden"
          whileInView="visible"
          className="flex flex-row items-center gap-8"
        >
          <m.button
            variants={AnimFadeIn}
            onClick={() => {
              if (live) {
                if (sold < 50) {
                  alert("Minting");
                  open(
                    CHAIN === "TESTNET" ? TEST_ZORA_URL : ZORA_URL,
                    "_blank",
                  );
                } else {
                  alert("Buying on secondary");
                  open(
                    CHAIN === "TESTNET" ? TEST_ZORA_URL : ZORA_URL,
                    "_blank",
                  );
                }
              } else {
                alert("Coming soon");
              }
            }}
            className="bg-[#2F2F2F] px-8 py-4 text-xl uppercase text-white hover:bg-prim hover:text-zinc-800"
          >
            {live
              ? sold < 50
                ? "mint on zora"
                : "secondary on zora"
              : "coming soon"}
          </m.button>
          {sold == 50 && (
            <Link href="/redeem">
              <m.button
                variants={AnimFadeIn}
                className="bg-[#2F2F2F] px-8 py-4 text-xl uppercase text-white hover:bg-prim hover:text-zinc-800"
              >
                REDEEM
              </m.button>
            </Link>
          )}

          {/* {isConnected && (
            <button
              className="flex flex-row gap-4 uppercase"
              onClick={() => openSwitchNetworks()}
            >
              Current Network:{" "}
              {chain?.name === "Zora" ? (
                <img
                  src="./zora-logo.png"
                  className="h-6 w-6"
                  alt="zora-logo"
                />
              ) : (
                <ChainIcon id={chain?.id} />
              )}
            </button>
          )} */}

          {/* {balance && (
            <span className="flex flex-row items-center gap-2 text-sm uppercase">
              BALANCE: {formatBalance(balance?.formatted)}{" "}
              {chain?.nativeCurrency?.symbol}
              {checkBalanceEnough() ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <XCircle className="h-4 w-4 text-red-500" />
              )}
            </span>
          )} */}

          {/* <button
            onClick={() => {
              if (sold < 50) {
                if (isConnected) {
                  if (chain?.name === "Zora") {
                    if (isSignedIn) {
                      if (live) {
                        if (checkBalanceEnough()) {
                          alert("Minting");
                        } else {
                          // alert("Insufficient balance");
                        }
                      } else {
                        // alert("Minting offline");
                      }
                    } else {
                      openSIWE();
                    }
                  } else {
                    openSwitchNetworks();
                  }
                } else {
                  setOpen(true);
                }
              } else {
                alert("Sold out");
              }
            }}
            className="bg-[#2F2F2F] px-8 py-4 text-2xl uppercase text-white hover:bg-prim hover:text-zinc-800"
            disabled={sold == 50}
          >
            {sold < 50
              ? isConnected
                ? chain?.name === "Zora"
                  ? isSignedIn
                    ? live
                      ? checkBalanceEnough()
                        ? "Mint now"
                        : "Insufficient balance"
                      : "Minting offline"
                    : "Sign in to mint"
                  : "Switch Network to Zora"
                : "Connect to mint"
              : "Sold out"}
          </button> */}
        </m.div>
      </div>
      <div data-lenis-prevent className="max-h-screen w-full overflow-y-auto">
        <div className="flex h-[1500px] min-h-screen w-full flex-col text-center">
          <m.img
            variants={AnimImageIn}
            initial="hidden"
            whileInView="visible"
            className="min-h-screen w-full bg-zinc-800 object-cover"
            // src="./images/cv-png/zine-p-12.png"
            // src="./images/cv-png/zine-p-19.png"
            src="./gallery/1.png"
            alt=""
          />
          <m.img
            variants={AnimImageIn}
            initial="hidden"
            whileInView="visible"
            className="min-h-screen w-full bg-zinc-800 object-cover"
            // src="./images/cv-png/zine-p-2.png"
            src="./gallery/2.png"
            alt=""
          />
          <m.img
            variants={AnimImageIn}
            initial="hidden"
            whileInView="visible"
            className="min-h-screen w-full bg-zinc-800 object-cover"
            // src="./images/cv-png/zine-p-7.png"
            src="./gallery/3.png"
            alt=""
          />
          <m.img
            variants={AnimImageIn}
            initial="hidden"
            whileInView="visible"
            className="min-h-screen w-full bg-zinc-800 object-cover"
            // src="./images/cv-png/zine-p-16.png"
            src="./gallery/4.png"
            alt=""
          />
          <m.img
            variants={AnimImageIn}
            initial="hidden"
            whileInView="visible"
            className="min-h-screen w-full bg-zinc-800 object-cover"
            // src="./images/cv-png/zine-p-1.png"
            src="./gallery/5.png"
            alt=""
          />
          <m.img
            variants={AnimImageIn}
            initial="hidden"
            whileInView="visible"
            className="min-h-screen w-full bg-zinc-800 object-cover"
            // src="./images/cv-png/zine-p-17.png"
            src="./gallery/6.png"
            alt=""
          />
          <m.img
            variants={AnimImageIn}
            initial="hidden"
            whileInView="visible"
            className="min-h-screen w-full bg-zinc-800 object-cover"
            // src="./images/cv-png/zine-p-18.png"
            src="./gallery/7.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BuySection;

const Divider = ({ className }: { className?: string }) => {
  return (
    <m.span
      variants={AnimFadeIn}
      className={`${className} h-4 w-full border-b-2 border-zinc-800`}
    ></m.span>
  );
};
