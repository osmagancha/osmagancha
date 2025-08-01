import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'CSCT - 대전 청소년 진로 멘토링 플랫폼',
  description: '정부 인증 대전 청소년 진로 멘토링 플랫폼. KAIST, 항공우주연구원, 대덕연구단지 전문가들과 함께하는 1:1 맞춤형 멘토링',
  generator: 'CSCT',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
