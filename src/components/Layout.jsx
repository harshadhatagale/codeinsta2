import React from 'react'
import Nav from './Nav'
import Footer from './Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import NextTopLoader from 'nextjs-toploader';
export default function Layout({ children }) {
  return (
    <>
      <NextTopLoader showSpinner={false} speed={300} />
      <Nav />
      <main className='pt-16 dark'>
        {children}
        <SpeedInsights />
        <Analytics />
      </main>
    <Footer/>
    </>
  )
}
