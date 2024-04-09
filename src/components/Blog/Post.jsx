import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Post(props) {
  return (
    <>
      <div className="flex w-4/5 bg-gray-100 shadow-sm  flex-col p-2 gap-3  dark:bg-black border border-gray-500 rounded-lg">
        <Image src={props.thumbnail} alt={props.title} width={220} height={220} className='w-full rounded-lg border border-gray-500'/>
        <div className="flex flex-col gap-1">
          <p className='hidden'>{props.id}</p>
          <p className='text-right text-gray-400 text-sm'>{props.date}</p>
          <p className='text-lg font-bold lg:p-2 capitalize'>{props.title}</p>
          <div className="flex items-center justify-center p-x-5 p-y-10 select-none">
            <Link href={`/blog/${props.link}`} className='text-white h-8 flex justify-center  items-center font-bold rounded-md w-full bg-green-700 text-center'>Read This!</Link>
          </div>
        </div>
      </div>
    </>
  )
}
