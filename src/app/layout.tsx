import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Diogos page",
  description: "A snapshot of what I am all about",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          {/* Header Section */}
          <header className="flex items-center justify-between p-4">
            <h1 className="text-4xl font-bold">Diogo Costa</h1>
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
          <main className="flex-grow flex justify-center items-center p-4">
            <div className="bg-white w-full h-full shadow-lg rounded-lg p-8 lg:flex">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
