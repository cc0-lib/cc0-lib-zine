"use client";

import CountDown from "@/components/ui/countdown";
import Link from "next/link";
import { motion as m, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  mintState: MintState;
};

const MainSection = ({ mintState }: Props) => {
  const live = mintState !== "live" ? false : true;
  const mainContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainContainer,
    offset: ["start end", "end start"],
  });

  const heroText1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), {
    stiffness: 400,
    damping: 90,
  });
  const heroText2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    {
      stiffness: 400,
      damping: 90,
    },
  );

  const stagChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const animationOne = {
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
  const animationTwo = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <m.div
        id="main"
        ref={mainContainer}
        variants={stagChildren}
        initial="hidden"
        animate="visible"
        className="s1 flex h-screen w-full flex-col justify-between overflow-hidden px-12 py-8"
      >
        <m.div
          variants={animationOne}
          initial="hidden"
          animate="visible"
          className="s1-top flex flex-row items-center justify-between font-chakra text-xl font-medium uppercase text-zinc-800"
        >
          <div className="title flex flex-row items-center justify-center gap-4">
            <h1>CC0-LIB ZINE &gt; </h1>
            <h1 className="text-sm">Special Edition 01 </h1>
          </div>
          <div className="menu flex items-center gap-2">
            <Link
              href="#info"
              className="px-2 hover:bg-prim hover:text-zinc-800"
            >
              Info
            </Link>
            <span>/</span>
            <Link
              href="#buy"
              aria-disabled={!live}
              className={`${
                !live && "pointer-events-none line-through"
              } " px-2 hover:bg-prim hover:text-zinc-800`}
            >
              buy
            </Link>
            <span>/</span>
            <Link
              className="px-2 hover:bg-prim hover:text-zinc-800"
              href="#details"
            >
              details
            </Link>
            <span>/</span>
            <Link
              href="/redeem"
              className="px-2 hover:bg-prim hover:text-zinc-800"
            >
              REDEEM
            </Link>
            <span>/</span>
            <Link
              href="#faq"
              className="px-2 hover:bg-prim hover:text-zinc-800"
            >
              FAQ
            </Link>
            <button
              onClick={() => {
                alert("Connect Wallet");
              }}
              className="px-2 text-2xl hover:bg-zinc-800 hover:text-prim"
            >
              [ CONNECT ]
            </button>
          </div>
        </m.div>
        <m.div className="s1-mid pointer-events-none relative flex h-full w-full scale-100 flex-col items-center justify-between p-8 xl:scale-125">
          <m.div
            style={{ x: heroText1 }}
            className="relative -mb-32 flex h-full w-full items-center"
          >
            <img
              src="./cc0-lib-h.svg"
              alt="cc0-lib-logo-horizontal"
              className="absolute left-1/3 h-5/6 scale-150"
            />
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4, ease: "easeInOut" }}
            className="z-10 bg-prim px-10 py-8 font-chakra text-6xl font-medium tracking-widest"
          >
            {live ? (
              <h1 className="tracking-normal">SPECIAL EDITION 01</h1>
            ) : (
              <CountDown date="Nov 27, 2023 00:00:00" />
            )}
          </m.div>
          <m.div
            style={{ x: heroText2 }}
            className="relative -mt-32 flex h-full w-full items-center"
          >
            <img
              src="./cc0-lib-h.svg"
              alt="cc0-lib-logo-horizontal"
              className="absolute -left-1/3 h-5/6 scale-150"
            />
          </m.div>
        </m.div>
        <m.div
          variants={animationTwo}
          initial="hidden"
          animate="visible"
          className="s1-btm flex flex-row items-center justify-between font-chakra text-xl font-medium uppercase text-zinc-800"
        >
          <div className="flex flex-row items-center justify-center gap-4">
            {live ? (
              <div className="bg-prim px-4 py-2 text-center">
                <h1 className="">LIVE</h1>
              </div>
            ) : (
              <div className="bg-[#A7A8A3] px-4 py-2 text-center">
                <h1 className="">OFFLINE</h1>
              </div>
            )}
            <h1 className="text-sm">
              MADE IN [{live ? "MALAYSIA" : "REDACTED"}]
            </h1>
          </div>
          <Link
            href="https://cc0-lib.wtf"
            target="_blank"
            rel="noopener
          noreferrer"
          >
            <h1 className="px-4 py-2 hover:bg-prim">CC0-LIB.WTF</h1>
          </Link>
        </m.div>
      </m.div>
    </>
  );
};

export default MainSection;
