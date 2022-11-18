import './globals.css'

import { Righteous } from '@next/font/google'
import Script from 'next/script'

const righteous = Righteous({
  weight: '400',
  variable: '--righteous-font',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" className={righteous.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-white dark:bg-black dark:text-white">{children}</body>
      {process.env.NODE_ENV === 'production' ? (
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "46e779db1e7c43b3b15fa1204f1e3b2f"}'
        />
      ) : undefined}
    </html>
  )
}
