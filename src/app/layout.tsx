import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "codeit Todo List",
  description: "codeit assignment Todo list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <div className="h-full flex flex-col">
          <Link href={"/"}>
            <div className="h-15 xl:px-90 lg:px-6 px-4 bg-white flex items-center border-b border-gray-200">
              <div className="hidden md:block">
                <Image
                  src="/logo_large.svg"
                  alt="Todo Icon"
                  width={151}
                  height={40}
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src="/logo_small.svg"
                  alt="Todo Icon"
                  width={71}
                  height={40}
                />
              </div>
            </div>
          </Link>
          <div className="justify-center items-center">{children}</div>
        </div>
      </body>
    </html>
  );
}
