"use client";
type Props = {
  sold: number;
};

const BuySection = ({ sold }: Props) => {
  return (
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
              captivating Nouns ecosystem, a curated collection of artworks from
              talented Nouns artists showcasing their unique visions and talents
              and the powerful influence of the creative commons zero ethos.
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
      <div data-lenis-prevent className="max-h-screen w-full overflow-y-auto">
        <div className="flex h-[1500px] min-h-screen w-full flex-col text-center">
          <img
            className="min-h-screen w-full bg-zinc-800 object-cover"
            // src="./images/cv-png/zine-p-12.png"
            // src="./images/cv-png/zine-p-19.png"
            src="./gallery/1.png"
            alt=""
          />
          <img
            className="min-h-screen w-full bg-zinc-800 object-cover"
            // src="./images/cv-png/zine-p-2.png"
            src="./gallery/2.png"
            alt=""
          />
          <img
            className="min-h-screen w-full bg-zinc-800 object-cover"
            // src="./images/cv-png/zine-p-7.png"
            src="./gallery/3.png"
            alt=""
          />
          <img
            className="min-h-screen w-full bg-zinc-800 object-cover"
            // src="./images/cv-png/zine-p-16.png"
            src="./gallery/4.png"
            alt=""
          />
          <img
            className="min-h-screen w-full bg-zinc-800 object-cover"
            // src="./images/cv-png/zine-p-1.png"
            src="./gallery/5.png"
            alt=""
          />
          <img
            className="min-h-screen w-full bg-zinc-800 object-cover"
            // src="./images/cv-png/zine-p-17.png"
            src="./gallery/6.png"
            alt=""
          />
          <img
            className="min-h-screen w-full bg-zinc-800 object-cover"
            // src="./images/cv-png/zine-p-18.png"
            src="./gallery/7.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BuySection;

const Divider = ({ className }: { className?: string }) => {
  return (
    <span
      className={`${className} h-4 w-full border-b-2 border-zinc-800`}
    ></span>
  );
};
