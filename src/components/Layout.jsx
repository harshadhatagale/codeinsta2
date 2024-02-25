import React from 'react'
import Nav from './Nav'
import { Analytics } from '@vercel/analytics/react';
import NextTopLoader from 'nextjs-toploader';
export default function Layout({ children }) {
  return (
    <>
      <NextTopLoader showSpinner={false} speed={300} />
      <Nav />
      <main className='pt-28 md:px-24 px-5 dark'>
        {children}
        <Analytics />
      </main>
    </>
  )
}
