// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './providers/ThemeProvider'
import { SessionProvider } from 'next-auth/react'
import { AuthProvider } from './providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Startup',
  description: 'Your description'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <ThemeProvider>
          <body className={inter.className}>{children}</body>
        </ThemeProvider>
      </AuthProvider>
    </html>
  )
}
