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
     {posts.map((post_item)=>(
        <Post key={post_item.id} thumbnail={post_item.thumbnail} date={post_item.date} title={`${post_item.slug.replace(".md","").slice(0, 35)}...`} link={post_item.slug} />
      ))}
    </div>
    </>
  )
}