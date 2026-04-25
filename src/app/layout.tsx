import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/providers";
import { NavigationWrapper } from "@/components/NavigationWrapper";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Carvajal",
  description: "Portfolio de Daniel Carvajal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
  lang="pt-BR"
  className={`${bebas.variable} ${inter.variable} h-full antialiased`}
>
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}