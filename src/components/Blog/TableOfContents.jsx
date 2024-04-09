import React from 'react'
import { Lato } from 'next/font/google'
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700","900"]
})
export default function TableOfContents({headings}) {
  return (
    <div className={`p-5 bg-slate-100 w-full dark:bg-slate-800 my-5 rounded-md ${lato.className}`}>
        <h2 className='text-2xl font-extrabold my-2'>Table of Contents:</h2>
        <ul>
            {headings.map((item)=>(
            <li key={item.id} className='capitalize font-bold hover:text-cyan-500 dark:hover:text-cyan-200'><a href={`#${item.id}`}>{item.title}</a></li>
            ))}
        </ul>
    </div>
  )
}
