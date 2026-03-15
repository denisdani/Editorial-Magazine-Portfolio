import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Newsletter from "@/components/Newsletter"

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const playfairDisplayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Arch & Design",
    default: "Arch & Design | Modern Architecture & Spatial Design",
  },
  description:
    "A curated editorial exploring the intersection of modern architecture, brutalist aesthetics, and sustainable spatial design.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Arch & Design",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${interFont.variable} ${playfairDisplayFont.variable} bg-background antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Newsletter />
        <Footer />
      </body>
    </html>
  )
}
