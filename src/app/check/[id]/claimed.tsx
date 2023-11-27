"use client";

import { motion as m } from "framer-motion";

type Props = {
  claimed: boolean;
  params: {
    id: number;
  };
};

const ClaimedPage = ({ claimed, params }: Props) => {
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
    <div className="flex flex-col items-center justify-around gap-10 font-jetbrains">
      <m.span
        variants={animationOne}
        initial="hidden"
        animate="visible"
        className="font-chakra text-6xl uppercase text-zinc-800 sm:text-9xl"
      >
        {claimed ? "CLAIMED" : "AVAILABLE"}
      </m.span>
      <m.span
        variants={animationTwo}
        initial="hidden"
        animate="visible"
        className="font-jetbrains text-base uppercase sm:text-lg"
      >
        ID #{params.id} {claimed ? "has been claimed" : "is available"}
      </m.span>
    </div>
  );
};

export default ClaimedPage;
