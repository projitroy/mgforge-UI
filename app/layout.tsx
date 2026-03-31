import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
