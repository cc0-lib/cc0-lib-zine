"use client";

import SplitLetters from "@/components/anim/split-letters";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-800">
      <span className="animate-bounce font-chakra text-9xl uppercase text-prim transition-all ease-in-out">
        <SplitLetters text="LOADING" />
      </span>
    </div>
  );
};

export default Loading;
