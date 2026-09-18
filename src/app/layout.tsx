import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minhaj Asghar | AI Engineer & Machine Learning Developer",
  description: "Portfolio of Minhaj Asghar, an AI Engineer and Machine Learning Developer specializing in Computer Vision, Machine Learning, and Generative AI.",
  keywords: ["AI Engineer", "Machine Learning", "Computer Vision", "Generative AI", "Portfolio", "Minhaj Asghar"],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
