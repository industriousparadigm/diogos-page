import type { Metadata } from 'next'
import { Inter, Playfair_Display, Open_Sans } from "next/font/google"
import "mapbox-gl/dist/mapbox-gl.css"
import "./globals.css"
import Link from "next/link"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })
const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diogos page",
  description: "A snapshot of what I am all about",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <div className="flex flex-col h-screen">
          {/* Header Section */}
          <header className="flex items-center justify-between p-4">
            <Link className="clean-link" href="/">
              <h1 className="text-5xl font-bold">Diogo Costa</h1>
            </Link>

            <div className="flex-grow">
              <div className="flex justify-center space-x-1">
                {/* Central Dots */}
                <span className="h-2 w-2 bg-gray-800 rounded-full"></span>
                <span className="h-2 w-2 bg-gray-800 rounded-full"></span>
                <span className="h-2 w-2 bg-gray-800 rounded-full"></span>
              </div>
            </div>
            <div>
              {/* Menu Icon */}
              <button aria-label="Open Menu">
                <div className="space-y-2">
                  <span className="block w-8 h-0.5 bg-gray-800"></span>
                  <span className="block w-8 h-0.5 bg-gray-800"></span>
                  <span className="block w-8 h-0.5 bg-gray-800"></span>
                </div>
              </button>
            </div>
          </header>

          {/* Main Content Section */}
          <main className="flex-grow flex justify-center items-center p-4 pt-0">
            <div className="bg-white w-full h-full shadow-lg rounded-lg p-8 pb-0 lg:flex">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
