"use client";

import {
  AnimatePresence,
  motion as m,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Lenis from "@studio-freight/lenis";

import DetailsSection from "@/components/sections/details-section";
import FaqSection from "@/components/sections/faq-section";
import InfoSection from "@/components/sections/info-section";
import BuySection from "@/components/sections/buy-section";
import MainSection from "@/components/sections/main-section";
import { ChevronUpCircle } from "lucide-react";
import { MINT_STATE } from "@/lib/constants";

// const mintState: MintState = MINT_STATE;

export default function HomePage({
  sold,
  live,
  time,
}: {
  sold: number;
  live: boolean;
  time: string;
}) {
  // const live = mintState !== "live" ? false : true;
  const [startScroll, setStartScroll] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  useEffect(() => {
    scrollYProgress.on("change", (a) => {
      if (a > 0.01) {
        setStartScroll(true);
      } else {
        setStartScroll(false);
      }
    });
  }, [scrollYProgress]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <main className="relative flex min-h-screen flex-col items-center justify-between bg-grayB text-zinc-800">
        <div
          id="scroller"
          className="fixed left-0 top-0 z-20 h-4 w-full bg-zinc-800"
        >
          <m.div
            style={{ scaleX }}
            className="h-4 w-full origin-left bg-prim"
          />
        </div>
        {startScroll && (
          <Link href="/" className="fixed bottom-8 right-8 z-30">
            <ChevronUpCircle className="h-12 w-12 text-zinc-800 hover:opacity-50" />
          </Link>
        )}
        <MainSection live={live} sold={sold} time={time} />
        <InfoSection />
        <BuySection sold={sold} live={live} />
        <DetailsSection />
        <FaqSection />

        {/* <div
        id="separator-1"
        className="sp-1 flex h-96 w-full flex-col items-center justify-center overflow-hidden font-chakra"
      >
        <img src="./images/cv-png/zine-p-3.png" className="w-full" alt="pics" />
      </div> */}

        <div
          id="footer"
          className="s6 relative flex h-auto w-full flex-col items-center bg-[#E7E7E7] py-16 font-chakra"
        >
          <div className="flex items-center gap-16">
            <Link
              href="https://nouns.wtf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <m.img
                variants={AnimFadeIn}
                initial="hidden"
                whileInView="visible"
                src="./noggles.svg"
                alt="noggles"
                className="h-6 hover:opacity-50"
              />
            </Link>
            <Link
              href="https://cc0-lib.wtf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <m.img
                variants={AnimFadeIn}
                initial="hidden"
                whileInView="visible"
                src="./cc0-lib-h.svg"
                alt="cc0-lib-logo-horizontal"
                className="h-6 hover:opacity-50"
              />
            </Link>
          </div>
        </div>
      </main>
    </AnimatePresence>
  );
}

const AnimFadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delat: 0.5,
      duration: 0.55,
      ease: "easeInOut",
    },
  },
};
