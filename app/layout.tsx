import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Surya Self Drive",
    template: "%s | Surya Self Drive",
  },
  description: "Premium self-drive car rentals. Luxury and budget cars with flexible packages in a professional, customer-first experience.",
  applicationName: "Surya Self Drive",
  keywords: [
    "Surya Self Drive",
    "Self drive car rentals",
    "Car rental",
    "Hyundai i20 rental",
    "Baleno rental",
    "Thar rental",
    "XUV700 rental",
    "Swift Dzire rental",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-dvh flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
