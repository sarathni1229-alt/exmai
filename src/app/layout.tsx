import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Background } from "@/components/ui/Background";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Exemplary AI | Your Agentic AI That Turns One Video Into 100+ Content Pieces",
  description:
    "Transform your videos into blog posts, social clips, tweets, newsletters, and more with AI-powered content repurposing. Built for podcasters, marketers, and content creators.",
  keywords: [
    "AI content repurposing",
    "video to content",
    "content automation",
    "podcaster tools",
    "content marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased relative min-h-screen`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <Background />
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
