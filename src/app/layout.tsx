import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Card game",
  description: "Do or drink application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.className} h-[100vh] relative`}
      >
        <div id="tileGrid" className="bg-black_extra z-0 h-full w-full absolute top-0 left-0"></div>
        {children}
      </body>
    </html>
  );
}
