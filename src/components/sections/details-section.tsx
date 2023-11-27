"use client";

import { motion as m } from "framer-motion";

import Draggable from "react-draggable";

const DetailsSection = () => {
  return (
    <>
      <div
        id="details"
        className="s4 relative hidden h-screen max-h-screen w-full flex-col items-center justify-around overflow-hidden bg-grayC font-chakra sm:flex"
      >
        <DragImage pos={{ x: 0, y: 50 }} src="./images/z-gnars.png" />
        <DragImage pos={{ x: -150, y: 150 }} src="./images/z-jimijerong.png" />
        <DragImage pos={{ x: 300, y: -150 }} src="./images/z-basepaint.png" />
        <DragImage pos={{ x: 20, y: -50 }} src="./images/z-sharkdao.png" />
        <DragImage pos={{ x: -250, y: -120 }} src="./images/z-nounders.png" />
        <DragImage pos={{ x: 250, y: 120 }} src="./images/z-xcopy.png" />

        <Draggable bounds="parent">
          <p className="absolute bottom-16 right-32 z-10 cursor-move select-none bg-prim px-4 py-2 font-jetbrains uppercase shadow-lg  shadow-zinc-700/50">
            Drag the images
          </p>
        </Draggable>
      </div>
      <div
        id="details"
        className="s4-mobile relative flex h-screen max-h-screen w-full flex-col items-center justify-around overflow-hidden bg-grayC font-chakra sm:hidden"
      >
        <DragImage pos={{ x: 0, y: 50 }} src="./images/z-gnars.png" />
        <DragImage pos={{ x: -50, y: 150 }} src="./images/z-jimijerong.png" />
        <DragImage pos={{ x: 100, y: -150 }} src="./images/z-basepaint.png" />
        <DragImage pos={{ x: 20, y: -50 }} src="./images/z-sharkdao.png" />
        <DragImage pos={{ x: -150, y: -120 }} src="./images/z-nounders.png" />
        <DragImage pos={{ x: 150, y: 120 }} src="./images/z-xcopy.png" />

        <Draggable bounds="parent">
          <p className="absolute bottom-16 right-32 z-10 cursor-move select-none bg-prim px-4 py-2 font-jetbrains uppercase shadow-lg  shadow-zinc-700/50">
            Drag the images
          </p>
        </Draggable>
      </div>
    </>
  );
};

export default DetailsSection;

const DragImage = ({
  pos,
  src,
  alt,
  className,
  test,
}: {
  pos: { x: number; y: number };
  src: string;
  alt?: string | "detail-image";
  className?: string;
  test?: boolean;
}) => {
  if (test) {
    return (
      <Draggable position={pos} bounds="parent">
        <m.img
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          src={src}
          draggable="false"
          className={`absolute w-1/2 cursor-move rounded-md shadow-lg shadow-zinc-700/50 sm:w-1/3 ${className}`}
          alt={alt}
        />
      </Draggable>
    );
  } else {
    return (
      <Draggable defaultPosition={pos} bounds="parent">
        <m.img
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          src={src}
          draggable="false"
          className={`absolute w-1/2 cursor-move rounded-md shadow-lg shadow-zinc-700/50 sm:w-1/3 ${className}`}
          alt={alt}
        />
      </Draggable>
    );
  }
};
