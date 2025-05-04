import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NUCES AI",
  description: "Comprehensive AI education and research resource hub for undergraduate students at NUCES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
        <footer className="bg-gray-900 border-t mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-gray-400 text-sm">
              Developed by Saleha Muzammil in 2025 in her collaboration with <span className="font-semibold">FAST NUCES</span> and <span className="font-semibold">Columbia University</span>.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
