import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { Poppins } from 'next/font/google'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})
export default function Footer() {
    return (
        <footer className={`${poppins.className} bg-slate-200 dark:bg-slate-700 space-y-10 w-full flex flex-col py-10 justify-center items-center`}>
            <div className='flex space-x-6'>
                <Link href="https://github.com/harshadhatagale"><FaGithub size={40}/></Link>
                <Link href="https://www.instagram.com/er.dashing_harsha_?igsh=MXc0ZTg1cTU4N3FjNQ=="><FaInstagramSquare size={40}/></Link>
                <Link href="https://www.facebook.com/profile.php?id=61557501074733"><FaFacebook size={40}/></Link>
                <Link href="https://twitter.com/game_harsh78073"><FaTwitter size={40}/></Link>
            </div>
            <div className='flex space-x-4'>
                <Link href="/" className='hover:underline underline-offset-1'>Home</Link>
                <Link href="/blog" className='hover:underline underline-offset-1'>Blog</Link>
                <Link href="/tools" className='hover:underline underline-offset-1'>Tools</Link>
                <Link href="/about" className='hover:underline underline-offset-1'>About Us</Link>
                <Link href="/privacy_policy" className='hover:underline underline-offset-1'>Privacy Policy</Link>
            </div>
            <div>
                <p>&copy; 2024 Code Insta. All rights reserved.</p>
            </div>
        </footer>
    )
}
