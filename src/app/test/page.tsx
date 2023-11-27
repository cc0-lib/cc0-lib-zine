"use client";

import SplitLetters from "@/components/anim/split-letters";

type Props = {};

const TestPage = (props: Props) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-800">
      <span className="animate-bounce font-chakra text-5xl uppercase text-prim transition-all ease-in-out sm:text-9xl">
        <SplitLetters text="LOADING" />
      </span>
    </div>
  );
};

export default TestPage;
