import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DRF - Doug Rock Front-end",
    template: "%s | DRF",
  },
  description: "Desenvolvedor Front-End com quase 8 anos de experiência transformando ideias em e-commerces, sites institucionais e blogs de alta performance que geram resultados reais para o negócio.",
  alternates: {
    canonical: "https://douglas-rocha-portfolio.vercel.app",
  },
  metadataBase: new URL("https://douglas-rocha-portfolio.vercel.app"),
  verification: {
    google: "MFJ4t96XyfMcpk-P-kBKeoRYAvqduDRAPMfwJZMADoY",
  }
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${raleway.variable} ${montserrat.variable} antialiased`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
