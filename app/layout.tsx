import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PixelVault — Retro Game Asset Marketplace",
  description: "Buy and sell sprites, sounds, and code for retro games. The premier marketplace for 8-bit sprites, chiptune music, and assembly code snippets."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="53c2bc70-af95-4397-b1ed-cbf995d21818"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
