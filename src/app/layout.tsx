import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CC0-LIB ZINE",
  description: "CC0-LIB Zine Special Edition 01",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`selection:bg-grayA selection:text-prim`}>
        {children}
      </body>
    </html>
  );
}
