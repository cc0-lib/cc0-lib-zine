import Web3Provider from "@/components/web3/web3-provider";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CC0-LIB ZINE",
  description: "CC0-LIB Zine Special Edition 01",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`selection:bg-grayA selection:text-prim`}>
        <Web3Provider>
          {children}
          <Analytics />
        </Web3Provider>
      </body>
    </html>
  );
}
