import type { Metadata } from "next";
import { Inter, Chakra_Petch, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const chakraPetch = Chakra_Petch({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CC0-LIB ZINE",
  description: "CC0-LIB Zine Special Edition 01",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${chakraPetch} ${jetBrainsMono} selection:bg-grayA selection:text-prim`}
      >
        {children}
      </body>
    </html>
  );
}
