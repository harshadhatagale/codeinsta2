import React from 'react'
import Post from '../components/Blog/Post'
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '800', '700', '900']
});
export async function getStaticProps(){
  const data= [
    {
      id:1, 
      title: "Post 1",
      content:"This is Post 1",
    },
    {
      id:2, 
      title: "Post 2",
      content:"This is Post 2",
    },
    {
      id:3, 
      title: "Post 3",
      content:"This is Post 3",
    },
    {
      id:4, 
      title: "Post 4",
      content:"This is Post 4",
    }
  ];
  return{
    props: {
      data
    },
  }
}
export default function PopularPost({data}) {
  return (
    <div className={`${poppins.className} items-center justify-items-center grid-cols-2 grid content-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-3`}>
      {data.map((post_item)=>(
        <Post key={post_item.id} title={post_item.title} content={post_item.content} />
      ))}
    </div>
  )
}
