import React from "react";

type Props = {
  sold: number;
};

const BuySection = ({ sold }: Props) => {
  return (
    <>
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
    </>
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
