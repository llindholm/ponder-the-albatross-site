import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ponderthealbatross.com"),

  title: {
    default: "Ponder the Albatross | New Music & Tour Dates",
    template: "%s | Ponder the Albatross",
  },

  description:
    "Ponder the Albatross blends bluegrass, punk, folk and rock into a high-energy Colorado sound. Hear new music, explore the band's story and see upcoming tour dates.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Ponder the Albatross | New Music & Tour Dates",
    description:
      "Bluegrass, punk, folk and rock collide in the high-energy sound of Ponder the Albatross. Hear new music and see upcoming tour dates.",
    url: "/",
    siteName: "Ponder the Albatross",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ponder the Albatross | New Music & Tour Dates",
    description:
      "Bluegrass, punk, folk and rock collide in the high-energy sound of Ponder the Albatross.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}