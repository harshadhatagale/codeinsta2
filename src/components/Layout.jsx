import React from 'react'
import Nav from './Nav'
import { Analytics } from '@vercel/analytics/react';
import NextTopLoader from 'nextjs-toploader';
export default function Layout({ children }) {
  return (
    <>
      <NextTopLoader showSpinner={false} speed={300} />
      <Nav />
      <main className='pt-28 lg:px-28 md:px-24 px-3 dark'>
        {children}
        <Analytics />
      </main>
    </>
  )
}
