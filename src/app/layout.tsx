import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script, Quicksand } from "next/font/google";
import "./globals.css";
import Sparkles from "@/components/Sparkles";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Enchanta — Made by Ada",
  description:
    "Handcrafted crochet bags, dresses & accessories woven with whimsy. Enchanta — made by Ada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dancingScript.variable} ${quicksand.variable} scroll-smooth`}
    >
      <body className="min-h-full bg-cream font-sans antialiased text-ink">
        <Sparkles />
        {children}
      </body>
    </html>
  );
}
