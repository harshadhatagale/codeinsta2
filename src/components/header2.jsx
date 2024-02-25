import React from 'react'
import Image from 'next/image'
import { Poppins } from "next/font/google"
const poppins = Poppins({
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
export default function Header2(props) {
    return (
        <>
        <div className='w-full dark:bg-slate-800 border bg-slate-800  border-gray-200 rounded-lg py-2 px-1 md:py-4 md:px-2 mb-5'>
            <h1 className={` ${poppins.className} capitalize dark:text-white  text-white font-bold text-xl px-2 md:text-xl lg:text-3xl`}>{props.content}</h1>
            <p className={`${poppins.className} text-gray-300 text-right text-sm my-2`}>{props.date}</p>
        </div>
        </>
    )
}
