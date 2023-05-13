import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Delivery Dashboard',
  description: 'Made for online devlivery',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        Test Added
        Added test1 on main branch
      </body>
    </html>
  )
}
