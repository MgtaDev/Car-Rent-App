import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Car Showcase App ',
  description: 'Car Showcase generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}