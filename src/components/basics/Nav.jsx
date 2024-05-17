import React from 'react'
import {  Roboto } from 'next/font/google'
import Link from 'next/link'
import { Pacifico } from 'next/font/google'
import { useState } from 'react'
const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900']
})
const pacifico= Pacifico({
  subsets: ["latin"],
  weight: ["400"]
})
export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function OpenNav() {
    setIsNavOpen(!isNavOpen);
  }
  function CloseNav() {
    setIsNavOpen(false);
  }
  return (
    <nav className={`select-none fixed top-0 border-t bg-white dark:bg-black nav ${isNavOpen ? "active" : ""} border-b dark:border-gray-500 flex h-16  justify-around w-screen items-center px-3`}>
      <div className=" h-20 flex w-screen logo_ham sm:max-auto md:w-auto justify-around items-center">
        <div className="tracking-wider text-3xl font-extrabold">
          <Link href="/" className={`${pacifico.className} logo font-extrabold transition-all text-white serif`} onClick={CloseNav}>Code Insta</Link>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <div className="absolute right-12">
          </div>
          <div className={`${isNavOpen ? "active" : ""} hamburger cursor-pointer md:hidden`} onClick={OpenNav}>
            <div className="line w-8 h-1.5 bg-gray-700 m-2 dark:bg-white rounded-md"></div>
            <div className="line w-8 h-1.5 bg-gray-700 m-2 dark:bg-white rounded-md"></div>
            <div className="line w-8 h-1.5 bg-gray-700 m-2 dark:bg-white rounded-md"></div>
          </div>
        </div>
      </div>
      <div className={` ${isNavOpen ? "active" : ""} links hidden md:flex`}>
        <ul className='flex items-center text-black font-bold justify-center gap-8 dark:text-white lg:text-lg'>
          <li className='hover:text-cyan-400'><Link href="/" onClick={CloseNav}>Home</Link></li>
          <li className='hover:text-cyan-400'><Link href="/blog" onClick={CloseNav}>Blog</Link></li>
          <li className='hover:text-cyan-400'><Link href="/about" onClick={CloseNav}>About Us!</Link></li>
          <li className='hover:text-cyan-400'><Link href="/privacy_policy" onClick={CloseNav}>Privacy Policy</Link></li>
        </ul>
      </div>
    </nav>
  )
}
