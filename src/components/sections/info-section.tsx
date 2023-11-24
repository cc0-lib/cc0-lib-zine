"use client";

import React, { useRef } from "react";
import { motion as m, useTransform, useScroll } from "framer-motion";

const infos = [
  "27 NOV 2023",
  "LIMITED TO 50 PCS",
  "62 PAGES",
  "NFT ON ZORA NETWORK",
  "0.03ETH [SHIPPING + TAX]",
  "FIRST COME FIRST SERVE",
  "MINT & REDEEM",
];

type Props = {};

const InfoSection = (props: Props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const specialMove = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const editionMove = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <>
      <div
        ref={container}
        className="s2 flex h-screen w-full flex-col justify-between px-12 py-8"
      >
        <div className="s2-mid relative flex h-full w-full flex-col items-center justify-between">
          <div className="relative -mb-32 flex h-full w-full items-center">
            <m.span
              style={{ x: specialMove }}
              className="text-grayD absolute right-1/4 scale-100 text-[250px] font-bold xl:scale-125"
            >
              SPECIAL
            </m.span>
          </div>
          <m.div className="z-10 w-full max-w-prose bg-prim p-20 text-justify font-jetbrains text-4xl font-medium uppercase">
            {infos.map((data, index) => (
              <div className="inline-flex gap-2" key={index}>
                <span className="break-all hover:bg-zinc-800 hover:text-prim">
                  {data}
                </span>
                {index !== infos.length - 1 && (
                  <span className="mr-2 self-center text-2xl">++</span>
                )}
              </div>
            ))}
            {/* 27 NOV 2023 / limited to 50 / 62 pages / nft on zora network /
              0.03eth [shipping + tax] / first come first serve / mint & redeem */}
          </m.div>
          <div className="relative -mt-32 flex h-full w-full items-center">
            <m.span
              style={{ x: editionMove }}
              className="text-grayD absolute left-1/4 scale-100 text-[250px] font-bold xl:scale-125"
            >
              EDITION
            </m.span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
