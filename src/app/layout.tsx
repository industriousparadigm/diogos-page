import type { Metadata } from 'next'
import { Asap, Exo_2 } from "next/font/google"
import "mapbox-gl/dist/mapbox-gl.css"
import "./globals.css"

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
        <main className="p-2 sm:p-4 h-screen flex justify-center items-center">
          <div className="bg-white w-full max-w-[calc(100%-0.25rem)] sm:max-w-[calc(100%-0.5rem)] h-full max-h-[calc(100%-0.25rem)] sm:max-h-[calc(100%-0.5rem)] shadow-lg rounded-lg overflow-auto p-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
