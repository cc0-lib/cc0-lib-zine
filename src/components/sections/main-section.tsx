"use client";

import CountDown from "@/components/ui/countdown";
import Link from "next/link";
import { motion as m, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import ConnectButton from "../web3/connect-button";
import SplitLetters from "../anim/split-letters";

type Props = {
  live: boolean;
  sold: number;
  time: string;
};

const MainSection = ({ live, sold, time }: Props) => {
  // const live = mintState !== "live" ? false : true;
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
        staggerChildren: 0.25,
      },
    },
  };
  const stagChildrenTwo = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        key="main-section"
        ref={mainContainer}
        variants={stagChildren}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="s1 flex h-screen w-full flex-col justify-between overflow-hidden px-12 py-8"
      >
        <m.div
          variants={childrenAnim}
          className="s1-top flex flex-row items-center justify-between font-chakra text-xl font-medium uppercase text-zinc-800"
        >
          <Link href="/">
            <m.div
              variants={stagChildren}
              initial="hidden"
              animate="visible"
              className="title flex flex-row items-center justify-center gap-4"
            >
              <m.h1 variants={childrenAnim}>CC0-LIB ZINE &gt; </m.h1>
              <m.h1 variants={childrenAnim} className="text-sm">
                Special Edition 01{" "}
              </m.h1>
            </m.div>
          </Link>
          <m.div
            variants={stagChildrenTwo}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="menu flex items-center gap-2"
          >
            <AnimatedLinkScroll key="menu-info" scroll={1}>
              INFO
            </AnimatedLinkScroll>
            <SlashAnim />
            <AnimatedLinkScroll
              key="menu-buy"
              scroll={2}
              className={`${
                !live && sold == 0 && "pointer-events-none line-through"
              }`}
              ariaDisabled={!live && sold == 0}
            >
              BUY
            </AnimatedLinkScroll>

            <SlashAnim />

            <AnimatedLinkScroll key="menu-details" scroll={3}>
              DETAILS
            </AnimatedLinkScroll>
            <SlashAnim />
            <AnimatedLink
              key="menu-redeem"
              href="/redeem"
              className={`${
                !live && sold == 0 && "pointer-events-none line-through"
              }`}
              ariaDisabled={!live && sold == 0}
            >
              REDEEM
            </AnimatedLink>
            <SlashAnim />
            <AnimatedLink
              key="menu-check"
              href="/check"
              className={`${
                !live && sold == 0 && "pointer-events-none line-through"
              }`}
              ariaDisabled={!live && sold == 0}
            >
              CHECK
            </AnimatedLink>
            <SlashAnim />
            <AnimatedLinkScroll key="menu-faq" scroll={4}>
              FAQ
            </AnimatedLinkScroll>
          </m.div>
        </m.div>
        <m.div
          variants={childrenAnim}
          className="s1-mid pointer-events-none relative flex h-full w-full scale-100 flex-col items-center justify-between p-8 xl:scale-125"
        >
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
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.4, ease: "easeInOut" }}
            className="z-10 bg-prim px-10 py-8 font-chakra text-6xl font-medium tracking-widest"
          >
            {live ? (
              <h1 className="tracking-normal">
                <SplitLetters text="SPECIAL EDITION 01" />
              </h1>
            ) : (
              <CountDown date={time} />
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
          variants={childrenAnim}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="s1-btm flex flex-row items-center justify-between font-chakra text-xl font-medium uppercase text-zinc-800"
        >
          <m.div
            variants={stagChildren}
            className="flex flex-row items-center justify-center gap-4"
          >
            {live ? (
              sold < 50 ? (
                <m.div
                  variants={childrenAnim}
                  className="bg-prim px-4 py-2 text-center"
                >
                  <h1 className="">LIVE</h1>
                </m.div>
              ) : (
                <m.div
                  variants={childrenAnim}
                  className="bg-prim px-4 py-2 text-center"
                >
                  <h1 className="">REDEEM PHASE</h1>
                </m.div>
              )
            ) : (
              <m.div
                variants={childrenAnim}
                className="bg-[#A7A8A3] px-4 py-2 text-center"
              >
                <h1 className="">OFFLINE</h1>
              </m.div>
            )}
            <m.h1 variants={childrenAnim} className="text-sm">
              MADE IN [{live ? "MALAYSIA" : "REDACTED"}]
            </m.h1>
          </m.div>
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

const childrenAnim = {
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

const AnimatedLink = ({
  href,
  children,
  className,
  ariaDisabled,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaDisabled?: boolean;
}) => {
  return (
    <m.div variants={childrenAnim}>
      <Link
        className={`${className} px-2 hover:bg-prim hover:text-zinc-800`}
        aria-disabled={ariaDisabled}
        href={href}
      >
        {children}
      </Link>
    </m.div>
  );
};

const AnimatedLinkScroll = ({
  children,
  className,
  ariaDisabled,
  scroll,
}: {
  children: React.ReactNode;
  className?: string;
  ariaDisabled?: boolean;
  scroll?: number;
}) => {
  return (
    <m.div variants={childrenAnim}>
      <button
        className={`${className} px-2 hover:bg-prim hover:text-zinc-800`}
        aria-disabled={ariaDisabled}
        onClick={() => {
          if (scroll) {
            window.scrollTo({
              top: window.innerHeight * scroll,
              behavior: "smooth",
            });
          }
        }}
      >
        {children}
      </button>
    </m.div>
  );
};

const SlashAnim = () => {
  return <m.span variants={childrenAnim}>/</m.span>;
};
