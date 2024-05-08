import React from 'react'
import { Lato } from 'next/font/google'
import { useState } from 'react'
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700","900"]
})
export default function TableOfContents({headings}) {
  function toggleTOC (){
    const toc_body= document.getElementById("toc_body");
    if(toc_body.classList= "hidden"){
      toc_body.classList.remove("hidden")
    }
    else{
      toc_body.classList.add("hidden")
    }
  }
  return (
    <div id="toc_head" className={`p-5 bg-slate-100 w-full dark:bg-slate-800 my-5 rounded-md ${lato.className}`}>
        <h2 onClick={toggleTOC} className='text-2xl font-extrabold my-2'>Table of Contents:</h2>
        <ul id='toc_body'>
            {headings.map((item)=>(
            <li key={item.id} className='capitalize font-bold hover:text-cyan-500 dark:hover:text-cyan-200'><a href={`#${item.id}`}>{item.title}</a></li>
            ))}
        </ul>
    </div>
  )
}
