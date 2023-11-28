"use client";

import {
  COLLECTION_ADDRESS,
  TEST_COLLECTION_ADDRESS,
  TEST_ZORA_URL,
  ZORA_URL,
} from "@/lib/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

type Props = {};

const CheckPage = (props: Props) => {
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  const router = useRouter();

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

  useEffect(() => {
    if (url) {
      const urlSplit = url.split("/");
      const id = urlSplit[urlSplit.length - 1];
      const isZora = urlSplit[urlSplit.length - 3] === "zora";
      const collection = COLLECTION_ADDRESS;
      const isCollectionAddress = urlSplit[urlSplit.length - 2] === collection;
      if (id && isZora && isCollectionAddress) {
        setError("");
        setInfo("Checking ++++ ");
        setTimeout(() => {
          router.push(`/check/${id}`);
        }, 200);
      } else {
        setInfo("");
        setError("Invalid URL");
      }
    }
  }, [url]);

  return (
    <m.div
      variants={animationTwo}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-around gap-10 font-jetbrains"
    >
      <span className="max-w-prose text-center font-chakra text-4xl uppercase text-zinc-800 sm:text-6xl">
        PASTE THE OPENSEA LINK
      </span>
      <textarea
        onChange={(e) => setUrl(e.target.value)}
        value={url}
        autoFocus
        autoCorrect="off"
        rows={2}
        // eg: https://opensea.io/assets/zora/0x909de919f43fc3454c2efb863446450247c0097a/3
        placeholder="https://opensea.io/assets/zora/[collection-address]/1"
        className="w-full max-w-prose bg-transparent px-4 text-center font-jetbrains text-base font-normal uppercase text-zinc-800 underline focus:outline-none active:outline-none sm:px-0 sm:text-lg"
      />
      <div>
        {info && (
          <m.span
            variants={animationTwo}
            initial="hidden"
            animate="visible"
            className="max-w-prose text-center text-base uppercase text-zinc-800 sm:text-lg"
          >
            {info}
          </m.span>
        )}
        {error && (
          <m.span
            variants={animationTwo}
            initial="hidden"
            animate="visible"
            className="max-w-prose text-center text-base uppercase text-red-800 sm:text-lg"
          >
            {error}
          </m.span>
        )}
      </div>
    </m.div>
  );
};

export default CheckPage;
