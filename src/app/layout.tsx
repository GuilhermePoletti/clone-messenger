import { Inter } from 'next/font/google'
import ToasterContext from './context/ToasterContext'
import './globals.css'
import AuthContext from './context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MessengerPlay',
  description: 'MessengerPlay para conectar e conversar com seus amigos de forma mais divertida!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>  
        <ToasterContext />
        {children}
        </AuthContext>
      </body>
    </html>
  )
}
