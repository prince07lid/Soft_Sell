import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoftSell - Turn Unused Software Licenses Into Cash",
  description:
    "SoftSell helps businesses monetize their unused software licenses quickly and at the best market rates.",
  keywords: ["software resale", "license reselling", "software licenses", "license valuation"],
  authors: [{ name: "SoftSell" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://softsell.vercel.app",
    title: "SoftSell - Turn Unused Software Licenses Into Cash",
    description:
      "SoftSell helps businesses monetize their unused software licenses quickly and at the best market rates.",
    siteName: "SoftSell",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftSell - Turn Unused Software Licenses Into Cash",
    description:
      "SoftSell helps businesses monetize their unused software licenses quickly and at the best market rates.",
  },
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransition>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
