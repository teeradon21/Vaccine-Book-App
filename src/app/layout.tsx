import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopMenu from '@/components/TopMenu'
import { getServerSession } from 'next-auth'
import { authOptions } from "./api/auth/[...nextauth]/route"
import NextAuthProvider from '@/providers/NextAuthProvider'
import ReduxProvider from '@/redux/Reduxprovider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VacQ',
  description: 'Online Vaccine Booking Application',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const nextAuthSession = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
        <NextAuthProvider session={nextAuthSession}>
          <TopMenu/>
          {children}
        </NextAuthProvider>
        </ReduxProvider>
        </body>
    </html>
  )
}
