import type { Metadata } from 'next'
import { Asap, Exo_2 } from "next/font/google"
import "mapbox-gl/dist/mapbox-gl.css"
import "./globals.css"
import Link from "next/link"
import Scroll from "@/components/scroll"

const asap = Asap({ subsets: ["latin"], variable: "--font-asap" })
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo-2" })

export const metadata: Metadata = {
  title: "Diogos page",
  description: "A snapshot of what I am all about",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${asap.variable} ${exo2.variable}`}>
        {/* Main Content Section */}
        <main className="sm:p-4 h-screen flex justify-center items-center">
          <div className="space-y-6 bg-white w-full sm:max-w-[960px] h-full sm:max-h-[calc(100%-0.5rem)] sm:shadow-lg sm:rounded-lg overflow-auto p-4 sm:p-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
