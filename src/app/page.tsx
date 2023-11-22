import CountDown from "@/components/ui/countdown";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";

const infos = [
  "27 NOV 2023",
  "LIMITED TO 50 PCS",
  "62 PAGES",
  "NFT ON ZORA NETWORK",
  "0.03ETH [SHIPPING + TAX]",
  "FIRST COME FIRST SERVE",
  "MINT & REDEEM",
];

const live = false;
const sold = 0;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-grayB text-zinc-800">
      <div
        id="home"
        className="s1 flex h-screen w-full flex-col justify-between overflow-hidden px-12 py-8"
      >
        <div className="s1-top flex flex-row items-center justify-between font-chakra text-xl font-medium uppercase text-zinc-800">
          <div className="title flex flex-row items-center justify-center gap-4">
            <h1 className="">CC0-LIB ZINE &gt; </h1>
            <h1 className="text-sm">Special Edition 01 </h1>
          </div>
          <div className="menu flex gap-2">
            <Link
              href="#info"
              className="px-2 hover:bg-prim hover:text-zinc-800"
            >
              Info
            </Link>
            <span>/</span>
            <Link
              href="#buy"
              aria-disabled={!live}
              className={`${
                !live && "pointer-events-none line-through"
              } " px-2 hover:bg-prim hover:text-zinc-800`}
            >
              buy
            </Link>
            <span>/</span>
            <Link
              className="px-2 hover:bg-prim hover:text-zinc-800"
              href="#details"
            >
              details
            </Link>
            <span>/</span>
            <Link
              href="#faq"
              className="px-2 hover:bg-prim hover:text-zinc-800"
            >
              FAQ
            </Link>
          </div>
        </div>
        <div className="s1-mid relative flex h-full w-full scale-100 flex-col items-center justify-between p-8 xl:scale-125">
          <div className="relative -mb-32 flex h-full w-full items-center">
            <img
              src="./cc0-lib-h.svg"
              alt="cc0-lib-logo-horizontal"
              className="pointer-events-none absolute left-1/3 h-5/6 scale-150"
            />
          </div>
          <div className="z-10 bg-prim px-10 py-8 font-chakra text-6xl font-medium tracking-widest">
            {live ? (
              <h1 className="tracking-normal">SPECIAL EDITION 01</h1>
            ) : (
              <CountDown date="Nov 27, 2023 00:00:00" />
            )}
          </div>
          <div className="relative -mt-32 flex h-full w-full items-center">
            <img
              src="./cc0-lib-h.svg"
              alt="cc0-lib-logo-horizontal"
              className="pointer-events-none absolute -left-1/3 h-5/6 scale-150"
            />
          </div>
        </div>
        <div className="s1-btm flex flex-row items-center justify-between font-chakra text-xl font-medium uppercase text-zinc-800">
          <div className="flex flex-row items-center justify-center gap-4">
            {live ? (
              <div className="bg-prim px-4 py-2 text-center">
                <h1 className="">LIVE</h1>
              </div>
            ) : (
              <div className="bg-[#A7A8A3] px-4 py-2 text-center">
                <h1 className="">OFFLINE</h1>
              </div>
            )}
            <h1 className="text-sm">
              MADE IN [{live ? "MALAYSIA" : "REDACTED"}]
            </h1>
          </div>
          <h1 className="">CC0-LIB.WTF</h1>
        </div>
      </div>
      <div
        id="info"
        className="s2 flex h-screen w-full flex-col justify-between overflow-hidden bg-grayC px-12 py-8 font-chakra"
      >
        <div className="s2 flex h-screen w-full flex-col justify-between px-12 py-8">
          <div className="s2-mid relative flex h-full w-full flex-col items-center justify-between">
            <div className="relative -mb-32 flex h-full w-full items-center">
              <span className="text-grayD absolute right-1/4 scale-100 text-[250px] font-bold xl:scale-125">
                SPECIAL
              </span>
            </div>
            <div className="z-10 w-full max-w-prose bg-prim p-20 text-justify font-jetbrains text-4xl font-medium uppercase">
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
            </div>
            <div className="relative -mt-32 flex h-full w-full items-center">
              <span className="text-grayD absolute left-1/4 scale-100 text-[250px] font-bold xl:scale-125">
                EDITION
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="buy"
        className="s3 flex h-screen w-full flex-row justify-around font-chakra"
      >
        <div className="flex h-auto w-full flex-col items-center justify-around p-12">
          <div className="h-auto w-full items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm">SPECIAL EDITION 01</span>
              <span className="text-5xl font-medium">CC0-LIB ZINE</span>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <p className="max-w-prose px-12 text-center font-jetbrains">
                A celebration of creativity and artistic expression. Inside this
                zine, you will discover a creative haven that explores the
                captivating Nouns ecosystem, a curated collection of artworks
                from talented Nouns artists showcasing their unique visions and
                talents and the powerful influence of the creative commons zero
                ethos.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center ">
            <Divider className="mb-8 max-w-xs" />
            <span className="text-5xl font-medium">{sold}/50</span>
            <span className="text-lg uppercase">minted</span>
            <Divider className="mt-2 max-w-xs" />
          </div>
          <button className="bg-[#2F2F2F] px-8 py-4 text-2xl text-white hover:bg-prim hover:text-zinc-800">
            SIGN IN TO MINT
          </button>
        </div>
        <div className="max-h-screen w-full overflow-y-auto">
          <div className="h-[1500px] w-full bg-red-500 text-center">
            <img
              src="https://musho.imgix.net/images/street_photography-17.png?auto=compress"
              alt=""
            />
            <img
              src="https://musho.imgix.net/images/lucg__modern_balcan_vernacular_architecture_interior_design_oly_cb7e3712-acd5-4847-870e-576950193b19.png?auto=compress"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1525247663235-1d5a3ae627fd?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        id="details"
        className="s4 relative flex h-screen max-h-screen w-full flex-col items-center justify-around bg-grayC font-chakra"
      >
        <>
          <img
            src="https://placehold.co/600x400/000000/FFF?text=3"
            className="absolute w-96 -translate-y-16 translate-x-52 shadow-2xl shadow-black/50"
            alt="pics"
          />
          <img
            src="https://placehold.co/600x400/3D3D3D/E9FF5F?text=2"
            className="absolute w-96 -translate-x-32 -translate-y-40 shadow-2xl shadow-black/50"
            alt="pics"
          />
          <img
            src="https://placehold.co/600x400/E9FF5F/3D3D3D?text=1"
            className="absolute w-96 translate-y-36 shadow-2xl shadow-prim/50"
            alt="pics"
          />
        </>
      </div>
      <div
        id="faq"
        className="s5 relative my-16 flex h-auto min-h-screen w-full flex-col items-center font-chakra"
      >
        <div className="my-16 text-5xl ">FAQ</div>
        <div className="flex w-full max-w-3xl flex-col gap-8">
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
                need to mint the NFT and fill out your delivery details to
                receive your print issue by mail. And now just wait for its
                arrival at your doorstep.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
                Can I cancel once minted?
              </AccordionTrigger>
              <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
                No, once minted, the NFT is non-refundable and this action is
                irreversible. If you do not wish to keep the NFT, you can sell
                the NFT on the secondary market, transfer it to someone else, or
                redeem it for the physical issue.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
                Do I have to redeem the NFT to receive a physical copy?
              </AccordionTrigger>
              <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
                Yes, you can only get the physical copy after you redeem your
                NFT and fill out your shipping information. However, if you are
                not interested in receiving a physical copy, you can:
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
                Each NFT costs 0.03 ETH. It includes international shipping &
                tax.
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
                A limit of 1 NFT per wallet. 1 NFT = 1 physical zine once
                redeemed
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
                Generally, physical print issues will begin shipping at the end
                of Nov, 2023. Upon redemption, the shipping time will vary based
                on your location.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-16">
              <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
                Am I able to return my physical issue?
              </AccordionTrigger>
              <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
                NFTs cannot be returned once they have been minted. On the other
                hand, if you redeem the NFT for a print issue and you either
                don&apos;t receive it or the issue is damaged, you may contact
                us at zine@cc0-lib.wtf.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-17">
              <AccordionTrigger className="text-left text-xl font-normal uppercase hover:underline">
                How do I get in contact with Team CC0-Lib if I have any
                questions about my order or changes to my delivery address,
                payment details & etc?
              </AccordionTrigger>
              <AccordionContent className="ml-6 whitespace-pre-wrap bg-prim p-8 font-jetbrains">
                Please email zine@cc0-lib.wtf for further assistance
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div
        id="footer"
        className="s6 relative flex h-auto w-full flex-col items-center bg-[#E7E7E7] py-16 font-chakra"
      >
        <div className="flex items-center gap-16">
          <img src="./noggles.svg" alt="noggles" className="h-6" />
          <img
            src="./cc0-lib-h.svg"
            alt="cc0-lib-logo-horizontal"
            className="h-6"
          />
        </div>
      </div>
    </main>
  );
}

const Divider = ({ className }: { className?: string }) => {
  return (
    <span
      className={`${className} h-4 w-full border-b-2 border-zinc-800`}
    ></span>
  );
};
