import './globals.css'
import { Righteous } from '@next/font/google'
import { AnalyticsWrapper } from './components/analytics'

const righteous = Righteous({
  weight: '400',
  variable: '--righteous-font',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={righteous.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-white dark:bg-black dark:text-white">
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
