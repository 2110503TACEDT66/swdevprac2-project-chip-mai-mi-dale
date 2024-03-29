import Topmenu from '@/components/Topmenu'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextAuthProvider from "@/providers/NextAuthProvider";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import ReduxProvider from '@/redux/ReduxProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Co-Working Space Hub',
  description: 'Reserve your space, craft your success.',
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
        {/* <ReduxProvider> */}
          <NextAuthProvider session={ nextAuthSession }>
            <Topmenu/>
            {children}
            </NextAuthProvider>
        {/* </ReduxProvider> */}
      </body>
    </html>
  )
}
