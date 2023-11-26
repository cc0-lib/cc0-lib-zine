"use client";

import { motion as m } from "framer-motion";

type Props = {
  text: string;
  delay?: number;
  duration?: number;
};

const SplitLetters = ({ text, delay, duration }: Props) => {
  const splitLetters = (word: string) => {
    return [...word].map((letter, index) => {
      return (
        <m.span
          key={index}
          initial={{ opacity: 0, y: 100 }}
          //   animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: (delay ? delay : 0.05) * index,
            duration: duration ? duration : 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {letter}
        </m.span>
      );
    });
  };

  return <>{splitLetters(text)}</>;
};

export default SplitLetters;
