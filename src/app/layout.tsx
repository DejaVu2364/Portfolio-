import type { Metadata } from "next"
import { Inter, Instrument_Serif, Sora } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Harikrishnan S — Medical Innovator | AI Builder | PR Strategist",
  description:
    "Final-year MBBS student building AI that improves healthcare systems and makes public services accessible. Creator of MedFlow AI, Seva AI, and political PR strategist.",
  keywords: [
    "Harikrishnan S",
    "Medical AI",
    "Healthcare Innovation",
    "MedFlow AI",
    "Seva AI",
    "Political PR",
    "MBBS Student Portfolio",
    "AI Builder India",
    "Health-Tech",
  ],
  authors: [{ name: "Harikrishnan S" }],
  creator: "Harikrishnan S",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://harikrishnan.me",
    siteName: "Harikrishnan S",
    title: "Harikrishnan S — Medical Innovator | AI Builder",
    description:
      "Building AI that improves healthcare systems and makes public services accessible to everyone.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harikrishnan S - Medical Innovator & AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harikrishnan S — Medical Innovator | AI Builder",
    description:
      "Building AI that improves healthcare systems and makes public services accessible.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} ${instrumentSerif.variable} antialiased bg-[#0a0a0f]`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
