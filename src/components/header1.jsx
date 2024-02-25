import React from 'react'

import {Poppins} from "next/font/google"
const popins= Poppins({
    subsets:["latin"],
    weight:['100','200', '300', '400','500','600','700','800','900']
})
export default function Header(props) {
  return (
    <div> <p className={` ${popins.className} my-5 text-black dark:text-white font-bold text-2xl`}>{props.content}</p></div>
  )
}
