import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="fixed top-0 left-0 right-0 h-12 bg-gray-800 text-white flex items-center justify-center z-10">
          ここが固定ヘッダーバーです
        </div>
        <div className='mt-16'>
          {children}
        </div>
      </body>
    </html>
  )
}