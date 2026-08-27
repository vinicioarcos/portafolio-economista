import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";

import { education } from "@/data/education";
import { teachingExperience } from "@/data/experience";
import { profile } from "@/data/profile";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const siteUrl = "https://www.vinicioarcos.net";
const siteTitle = "Vinicio Arcos | Economista, investigador y científico de datos";
const siteDescription =
  "Portafolio profesional de Vinicio Arcos: investigación económica, econometría, ciencia de datos, políticas públicas, docencia y desarrollo de soluciones digitales.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Vinicio Arcos"
  },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteUrl,
    siteName: "Vinicio Arcos",
    title: siteTitle,
    description: siteDescription
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const currentRole = teachingExperience.find((item) => item.period === "Actualidad");

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.titleShort,
    jobTitle: profile.role,
    description: profile.summary,
    url: siteUrl,
    image: `${siteUrl}/images/profile.jpg`,
    email: `mailto:${profile.email}`,
    ...(currentRole
      ? {
          worksFor: {
            "@type": "CollegeOrUniversity",
            name: currentRole.organization
          }
        }
      : {}),
    alumniOf: education.map((item) => ({
      "@type": "CollegeOrUniversity",
      name: item.institution
    })),
    sameAs: [profile.linkedin, "https://orcid.org/0000-0002-5491-7127", "https://osf.io/z92qh", "https://vinicioarcos.github.io"]
  };

  return (
    <html className={manrope.variable} lang="es">
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          type="application/ld+json"
        />
        {children}
      </body>
    </html>
  );
}
