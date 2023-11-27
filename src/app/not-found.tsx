"use client";

import SplitLetters from "@/components/anim/split-letters";
import { motion as m } from "framer-motion";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-800">
      <span className="font-chakra text-5xl uppercase text-prim sm:text-9xl">
        <SplitLetters text="NOT FOUND" delay={0.2} />
      </span>
    </div>
  );
};

export default NotFound;
