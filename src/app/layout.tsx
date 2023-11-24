import type { Metadata } from "next";
import "./globals.css";

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
      <body className={` selection:bg-grayA selection:text-prim`}>
        {children}
      </body>
    </html>
  );
}
