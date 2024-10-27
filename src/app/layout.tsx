import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import OnchainProviders from "./providers";
import "@coinbase/onchainkit/styles.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FIGHT CLUB",
  description: "Fight fot your Freedom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OnchainProviders>
          <div></div>
          {children}
        </OnchainProviders>
      </body>
    </html>
  );
}
