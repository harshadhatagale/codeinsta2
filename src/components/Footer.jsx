import React from 'react'
import { Poppins } from 'next/font/google'
const poppins= Poppins({
    subsets:["latin"],
    weight:["100","200","300","400","500","600","700","800","900"]
})
export default function Footer() {
    return (
        <footer className={`${poppins.className} bg-slate-700 space-y-10 w-full flex flex-col py-10 justify-center items-center`}>
            <div className='flex space-x-4'>
                <a href="https://github.com/harshadhatagale"><img className=' w-10' src="github.png" alt="github" /></a>
                <a href="https://www.instagram.com/er.dashing_harsha_?igsh=MXc0ZTg1cTU4N3FjNQ=="><img className='w-10' src="instagram.png" alt="github" /></a>
                <a href="https://www.facebook.com/profile.php?id=61557501074733"><img className='w-10' src="facebook.png" alt="facebook" /></a>
                <a href="https://twitter.com/game_harsh78073"><img className='w-10' src="twitter.png" alt="facebook" /></a>
            </div>
            <div className='flex space-x-4'>
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/about">About Us</a>
                <a href="/privacy_policy">Privacy Policy</a>
            </div>
            <div>
            <p>&copy; 2024 Code Insta. All rights reserved.</p>
            </div>
        </footer>
    )
}
