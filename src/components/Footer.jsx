import React from 'react'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
const poppins= Poppins({
    subsets:["latin"],
    weight:["100","200","300","400","500","600","700","800","900"]
})
export default function Footer() {
    return (
        <footer className={`${poppins.className} bg-slate-700 space-y-10 w-full flex flex-col py-10 justify-center items-center`}>
            <div className='flex space-x-4'>
                <Link href="https://github.com/harshadhatagale"><img className=' w-10' src="github.png" alt="github" /></Link>
                <Link href="https://www.instagram.com/er.dashing_harsha_?igsh=MXc0ZTg1cTU4N3FjNQ=="><img className='w-10' src="instagram.png" alt="github" /></Link>
                <Link href="https://www.facebook.com/profile.php?id=61557501074733"><img className='w-10' src="facebook.png" alt="facebook" /></Link>
                <Link href="https://twitter.com/game_harsh78073"><img className='w-10' src="twitter.png" alt="facebook" /></Link>
            </div>
            <div className='flex space-x-4'>
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About Us</Link>
                <Link href="/privacy_policy">Privacy Policy</Link>
            </div>
            <div>
            <p>&copy; 2024 Code Insta. All rights reserved.</p>
            </div>
        </footer>
    )
}
