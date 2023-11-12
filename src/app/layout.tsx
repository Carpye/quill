import { cn } from "@/lib/utils"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Providers from "@/components/Providers"
import { Toaster } from "@/components/ui/toaster"

import "simplebar-react/dist/simplebar.min.css"
import "react-loading-skeleton/dist/skeleton.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "min-h-screen font-sans antialiased grainy",
          inter.className
        )}
      >
        <Providers>
          <Toaster />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
