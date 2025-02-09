import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar/Navbar'
import Footer from '@/component/Footer/Footer' 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nu-Clan Systemz',
  description: 'Application Designed by Tswanaf',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        < Navbar />
        {children}
        < Footer />
      </body>
    </html>
  )
}