import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "react-hot-toast"
import { Header, Modal } from "./shared/components"

export const metadata: Metadata = {
  title: "NIK",
  description: "This is my portfolio created with Next.js",
  icons: [{ rel: "icon", url: "/images/logo.webp" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        <Modal title="CONTACT ME" />
        <Toaster position="top-right" reverseOrder={false} />
        <main>{children}</main>
      </body>
    </html>
  )
}
