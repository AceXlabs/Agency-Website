import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "AceXLabs",
  description:
    "From Concept to Create ion Making Ideas Happen From sleek websites to scalable SaaS platforms and innovative MVPs, we specialize in building with JavaScript, Golang, Rust, and Web3 technologies. Whether you need robust web applications or blockchain-powered products, our agency is your go-to partner in turning concepts into impactful digital experiences.",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className}  antialiased dark`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
