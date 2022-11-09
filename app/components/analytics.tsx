'use client'
import { Analytics } from '@vercel/analytics/react'

const PRODUCTION: boolean = process.env.NODE_ENV === 'production'

export function AnalyticsWrapper(): JSX.Element | null {
  return PRODUCTION ? <Analytics /> : null
}
