import React from 'react'
import { Poppins } from "next/font/google"
const poppins = Poppins({
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
export default function Header2(props) {
    return (
        <>
        <div className='w-full flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  border-gray-200 py-6 md:py-15 md:px-2 mb-5 px-2'>
               <h1 className={` ${poppins.className}  capitalize dark:text-white  text-white font-bold text-2xl px-2 md:text-xl lg:text-2xl`}>{props.content}</h1>
        </div>
       
        </>
    )
}
