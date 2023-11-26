"use client";

import { motion as m } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

const transition = {
  duration: 1,
  ease: [0.22, 1, 0.36, 1],
};

const FaqSection = (props: Props) => {
  return (
    <div
      id="faq"
      className="s5 relative my-16 flex h-auto min-h-screen w-full flex-col items-center font-chakra"
    >
      <m.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ transition }}
        className="my-16 text-5xl "
      >
        FAQ
      </m.div>
      <m.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ...transition, delay: 0.1 }}
        className="flex w-full max-w-3xl flex-col gap-8"
      >
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              What is CC0-LIB ZINE NFT?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 text-left font-jetbrains">
              We created a NFT for a digital mint of CC0-Lib Special Edition
              Zine 01. It can be used to redeem for a physical copy of CC0-Lib
              Zine 62-page print issue, produced by Team CC0-Lib.
              <br />
              <br />
              In order to receive a physical copy of the print issue, you will
              need to mint the NFT and fill out your delivery details to receive
              your print issue by mail. And now just wait for its arrival at
              your doorstep.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              Can I cancel once minted?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              No, once minted, the NFT is non-refundable and this action is
              irreversible. If you do not wish to keep the NFT, you can sell the
              NFT on the secondary market, transfer it to someone else, or
              redeem it for the physical issue.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              Do I have to redeem the NFT to receive a physical copy?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              Yes, you can only get the physical copy after you redeem your NFT
              and fill out your shipping information. However, if you are not
              interested in receiving a physical copy, you can:
              <br />
              <br />
              <ul className="list-inside list-disc">
                <li>Keep the NFT</li>
                <li>Sell the NFT on the secondary market</li>
                <li>Transfer the NFT to someone else</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              What&apos;s included in the physical copy?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              A zine and bundle of stickers. Each shipment comes with a
              double-box packaging for safety purposes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              What forms of payment do you accept to purchase the NFT?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              Ethereum (ETH) only.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              How much does each NFT cost?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              Each NFT costs 0.03 ETH. It includes international shipping & tax.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              How many NFTs are available for minting?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              There are a total of 50 NFTs = 50 Pcs of physical zine available
              for public.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              How many will I be able to mint?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              A limit of 1 NFT per wallet. 1 NFT = 1 physical zine once redeemed
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              How long is the minting window?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              You can mint the CC0-Lib Special Edition Zine 01 NFT while the
              supply lasts.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              How long is the redemption window open for?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              The redemption is available from Nov 27, 2023 until February 27,
              2024
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              Does the physical issue ship everywhere?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              We ship worldwide.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              Is shipping included?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              Yes, shipping & tax is included.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              Can I send this NFT to someone else to redeem?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              Yes, you can gift the Zora Zine Print Issue 001 NFT to someone
              else to redeem provided that you have not redeemed it yourself.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-14">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              Will the contents of this print issue exist online as well?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              The contents of CC0-Lib Special Edition Zine 01 will be
              exclusively available to NFT holders only via zine.cc0-lib.wtf.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-15">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              When will I receive my physical issue?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              This is dependent on when you decide to redeem your NFT.
              Generally, physical print issues will begin shipping at the end of
              Nov, 2023. Upon redemption, the shipping time will vary based on
              your location.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-16">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              Am I able to return my physical issue?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              NFTs cannot be returned once they have been minted. On the other
              hand, if you redeem the NFT for a print issue and you either
              don&apos;t receive it or the issue is damaged, you may contact us
              at zine@cc0-lib.wtf.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-17">
            <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
              How do I get in contact with Team CC0-Lib if I have any questions
              about my order or changes to my delivery address, payment details
              & etc?
            </AccordionTrigger>
            <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
              Please email zine@cc0-lib.wtf for further assistance
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </m.div>
    </div>
  );
};

export default FaqSection;
