import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minhaj Asghar | AI Engineer & Machine Learning Developer",
  description: "Portfolio of Minhaj Asghar, a BS Artificial Intelligence student specializing in Machine Learning, Computer Vision, and Generative AI.",
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
