import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from '@/components/Header';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "MGForge",
  description: "MGForge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body
        className={`antialiased bg-black`}
      >
        <Header/>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
