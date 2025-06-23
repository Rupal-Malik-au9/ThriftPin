import type { Metadata } from 'next'
import { Inter, Noto_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const notoSans = Noto_Sans({ 
  subsets: ['latin'],
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: 'ThriftPin - Pinterest-Inspired Thrift Surprise Boxes',
  description: 'Connect your Pinterest board with expert thrifters who curate surprise boxes just for your style.',
  keywords: ['thrifting', 'pinterest', 'fashion', 'sustainability', 'curated boxes'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSans.variable}`}>
      <body className="font-sans antialiased bg-white min-h-screen">
        {children}
      </body>
    </html>
  )
}