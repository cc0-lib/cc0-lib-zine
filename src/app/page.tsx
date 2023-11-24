import CountDown from "@/components/ui/countdown";
import Link from "next/link";
import DetailsSection from "@/components/sections/details-section";
import FaqSection from "@/components/sections/faq-section";
import InfoSection from "@/components/sections/info-section";
import BuySection from "@/components/sections/buy-section";

const mintState: MintState = "offline";
const sold = 0;

export default function Home() {
  const live = mintState !== "live" ? false : true;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-grayB text-zinc-800">
      <div
        id="main"
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
            <span></span>
            <button className="px-2 hover:bg-zinc-800 hover:text-prim">
              [ CONNECT ]
            </button>
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
          <Link
            href="https://cc0-lib.wtf"
            target="_blank"
            rel="noopener
          noreferrer"
          >
            <h1 className="px-4 py-2 hover:bg-prim">CC0-LIB.WTF</h1>
          </Link>
        </div>
      </div>
      <div
        id="info"
        className="s2 flex h-screen w-full flex-col justify-between overflow-hidden bg-grayC px-12 py-8 font-chakra"
      >
        <InfoSection />
      </div>
      <div
        id="buy"
        className="s3 flex h-screen w-full flex-row justify-around font-chakra"
      >
        <BuySection sold={sold} />
      </div>
      <div
        id="details"
        className="s4 relative flex h-screen max-h-screen w-full flex-col items-center justify-around overflow-hidden bg-grayC font-chakra"
      >
        <DetailsSection />
      </div>

      <div
        id="faq"
        className="s5 relative my-16 flex h-auto min-h-screen w-full flex-col items-center font-chakra"
      >
        <FaqSection />
      </div>
      <div
        id="separator-1"
        className="sp-1 flex h-96 w-full flex-col items-center justify-center overflow-hidden font-chakra"
      >
        <img src="./images/cv-png/zine-p-3.png" className="w-full" alt="pics" />
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
