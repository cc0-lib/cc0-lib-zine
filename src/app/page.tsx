import CountDown from "@/components/ui/countdown";
import Link from "next/link";
import DetailsSection from "@/components/details-section";
import FaqSection from "@/components/faq-section";

const infos = [
  "27 NOV 2023",
  "LIMITED TO 50 PCS",
  "62 PAGES",
  "NFT ON ZORA NETWORK",
  "0.03ETH [SHIPPING + TAX]",
  "FIRST COME FIRST SERVE",
  "MINT & REDEEM",
];

const mintState: MintState = "offline";
const sold = 0;

export default function Home() {
  const live = mintState !== "live" ? false : true;

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
            <span></span>
            <button className="px-2 hover:bg-prim hover:text-zinc-800">
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
          <div className="h-[1500px] min-h-screen w-full text-center">
            <img
              className="min-h-screen object-cover"
              // src="./images/cv-png/zine-p-12.png"
              src="./images/cv-png/zine-p-19.png"
              alt=""
            />
            <img
              className="min-h-screen object-cover"
              src="./images/cv-png/zine-p-2.png"
              alt=""
            />
            <img
              className="min-h-screen object-cover"
              src="./images/cv-png/zine-p-7.png"
              alt=""
            />
            <img
              className="min-h-screen object-cover"
              src="./images/cv-png/zine-p-16.png"
              alt=""
            />
            <img
              className="min-h-screen object-cover"
              src="./images/cv-png/zine-p-1.png"
              alt=""
            />
            <img
              className="min-h-screen object-cover"
              src="./images/cv-png/zine-p-17.png"
              alt=""
            />
            <img
              className="min-h-screen object-cover"
              src="./images/cv-png/zine-p-18.png"
              alt=""
            />
          </div>
        </div>
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

const Divider = ({ className }: { className?: string }) => {
  return (
    <span
      className={`${className} h-4 w-full border-b-2 border-zinc-800`}
    ></span>
  );
};
