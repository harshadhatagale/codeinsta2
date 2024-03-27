import React from 'react'
import Post from '@/components/Blog/Post';
import { Poppins } from 'next/font/google';
import Header from '../header1';
const poppins = Poppins({
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '800', '700', '900']
  });
export default function LatestPosts({posts}) {
  return (
    <>
    <div>
    <Header content="Latest Blog Posts" />
     <div className="pt-3 pb-5 w-full flex flex-col justify-center items-center md:content-center lg:content-center lg:justify-items-center md:justify-items-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-3">
     {posts.map((post_item)=>(
        <Post key={post_item.id} thumbnail={post_item.thumbnail} date={post_item.date} title={`${post_item.slug.replace(".md","").slice(0, 35)}...`} link={post_item.slug} />
      ))}
     </div>
    </div>
    </>
  )
}