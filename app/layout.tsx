import type { Metadata } from "next";
import { Lato, Nunito_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Tiny Library",
  description: "Tiny library is a solo project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} ${lato.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
