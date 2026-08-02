import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Vinicio Arcos | Economista",
  description:
    "Portafolio profesional de un economista enfocado en analisis, consultoria, investigacion aplicada y formacion."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={manrope.variable} lang="es">
      <body>{children}</body>
    </html>
  );
}
