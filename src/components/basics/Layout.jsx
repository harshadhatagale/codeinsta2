import React from 'react'
import Nav from './Nav'
import Footer from './Footer';
import { Inter as FontSans } from "next/font/google"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import NextTopLoader from 'nextjs-toploader';
const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100","200","300","400"]
})
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
