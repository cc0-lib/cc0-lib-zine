import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: "#E9FF5F",
        grayA: "#3D3D3D",
        grayB: "#D9D9D9",
        grayC: "#BABABA",
        grayD: "#6D6D6D",
      },
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
        jetbrains: ["Jetbrains Mono", "monotype"],
      },
    },
  },
  plugins: [],
};
export default config;
