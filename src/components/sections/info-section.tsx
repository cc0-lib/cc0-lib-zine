"use client";

import React, { useRef } from "react";
import { motion as m, useTransform, useScroll, useSpring } from "framer-motion";
import SplitLetters from "../anim/split-letters";

const infos = [
  "27 NOV 2023",
  "LIMITED TO 50 PCS",
  "62 PAGES",
  "NFT ON ZORA NETWORK",
  "0.03ETH [SHIPPING + TAX]",
  "FIRST COME FIRST SERVE",
  "MINT & REDEEM",
];

const stagChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const childrenAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

type Props = {};

const InfoSection = (props: Props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const specialMove = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, 0]),
    {
      stiffness: 400,
      damping: 90,
    },
  );
  const editionMove = useSpring(
    useTransform(scrollYProgress, [0, 1], [-200, 0]),
    {
      stiffness: 400,
      damping: 90,
    },
  );

  return (
    <div
      id="info"
      className="s2 flex h-screen w-full flex-col justify-between overflow-hidden bg-grayC px-12 py-8 font-chakra"
    >
      <div
        ref={container}
        className="s2 flex h-screen w-full flex-col justify-between px-12 py-8"
      >
        <div className="s2-mid relative flex h-full w-full flex-col items-center justify-between">
          <div className="relative -mb-32 flex h-full w-full items-center">
            <m.span
              style={{ x: specialMove }}
              className="absolute right-1/4 scale-100 text-[250px] font-bold text-grayD xl:scale-125"
            >
              <SplitLetters text="SPECIAL" duration={2} />
            </m.span>
          </div>
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
            viewport={{
              once: true,
            }}
            className="z-10 w-full max-w-prose bg-prim p-20 text-justify font-jetbrains text-4xl font-medium uppercase"
          >
            {infos.map((data, index) => (
              <m.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 1,
                  ease: "backOut",
                }}
                className="inline-flex gap-2"
                key={index}
              >
                <span className="break-all hover:bg-zinc-800 hover:text-prim">
                  {data}
                </span>
                {index !== infos.length - 1 && (
                  <span className="mr-2 self-center text-2xl">++</span>
                )}
              </m.div>
            ))}
            {/* 27 NOV 2023 / limited to 50 / 62 pages / nft on zora network /
              0.03eth [shipping + tax] / first come first serve / mint & redeem */}
          </m.div>
          <div className="relative -mt-32 flex h-full w-full items-center">
            <m.span
              style={{ x: editionMove }}
              className="absolute left-1/4 scale-100 text-[250px] font-bold text-grayD xl:scale-125"
            >
              <SplitLetters text="EDITION" duration={2} />
            </m.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
