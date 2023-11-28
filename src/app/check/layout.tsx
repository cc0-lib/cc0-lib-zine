"use client";

import { COLLECTION_ADDRESS, ZORA_URL } from "@/lib/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const CheckPageLayout = ({ children }: Props) => {
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
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-grayB p-8 text-zinc-800 sm:px-12 sm:py-8">
      <m.div
        variants={animationOne}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-row items-center justify-between gap-8 font-chakra text-base font-medium uppercase sm:text-xl"
      >
        <span>ZINE NFT CLAIM CHECKER</span>
        <div className="menu flex flex-row items-center gap-2">
          <Link
            href={ZORA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden px-2 hover:bg-prim hover:text-zinc-800 sm:block"
          >
            SECONDARY
          </Link>
          <span className="hidden sm:block">/</span>
          <Link
            href="/check"
            className={"px-2 hover:bg-prim hover:text-zinc-800"}
          >
            CHECK
          </Link>
        </div>
      </m.div>

      {children}

      <m.div
        variants={animationOne}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-row items-center justify-between gap-8 font-chakra text-base font-medium sm:text-xl "
      >
        <div className="border-2 border-zinc-800 px-8 py-2 text-center">
          <h1 className="">ONLINE</h1>
        </div>
        <Link href="/">
          <span className="px-4 py-2 hover:bg-prim">BACK TO HOME</span>
        </Link>
      </m.div>
    </main>
  );
};

export default CheckPageLayout;
