import React from 'react'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
const roboto= Roboto({
  subsets:["latin"],
  weight:['100', '300', '400','500', '700','900']
})
export default function Nav() {
  const [isNavOpen, setIsNavOpen]= useState(false);
  function notSmall(){

  }
  function OpenNav(){
    setIsNavOpen(!isNavOpen);
  }
  function CloseNav(){
    setIsNavOpen(false);
  }
  return (
    <nav className={` fixed top-0 border-t bg-white dark:bg-black nav ${isNavOpen ? "active":""} border-b dark:border-gray-500 flex h-20  justify-around w-screen items-center px-3`}>
    <div className=" h-20 flex w-screen logo_ham sm:max-auto md:w-auto justify-around items-center">
    <div className="tracking-wider text-3xl font-extrabold">
         <Link href="/blog" className={`${roboto.className} logo transition-all text-white serif`} onClick={CloseNav}>Code Insta</Link>
     </div>
     <div className="flex items-center justify-center gap-x-2">
     <div className={`${isNavOpen ? "active":""} hamburger cursor-pointer md:hidden`} onClick={OpenNav}>
       <div className="line w-8 h-1.5 bg-gray-700 m-2 dark:bg-white rounded-md"></div>
       <div className="line w-8 h-1.5 bg-gray-700 m-2 dark:bg-white rounded-md"></div>
       <div className="line w-8 h-1.5 bg-gray-700 m-2 dark:bg-white rounded-md"></div>
     </div>
    </div>
     </div>
    <div className={` ${isNavOpen ? "active":""} links hidden md:flex`}>
     <ul className='flex items-center text-black font-bold justify-center gap-8 dark:text-white lg:text-xl'>
       <li className='hover:text-cyan-400'><Link href="/blog" onClick={CloseNav}>Blog</Link></li>
     </ul>
    </div>
 </nav>
  )
}
