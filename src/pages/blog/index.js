
import Post from '@/components/Blog/Post';
import { getPostSlugs, getPostByslug } from '../../../utils/fetchPosts'
import { Poppins } from 'next/font/google'
import HeadTag from '@/components/HeadTag';
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '800', '700', '900']
});
export default function posts({posts}) {
  
  return (
    <>
        <HeadTag title="Code Insta" description="Explore comprehensive coding tutorials on our blog, where we demystify programming concepts, provide hands-on examples, and guide you through real-world projects. From beginner-friendly introductions to advanced coding challenges, our tutorials cover a wide range of programming languages and technologies" canUrl="https://www.codeinsta.tech/blog"/>
    <div className={`${poppins.className} pt-5 items-center justify-items-center grid-cols-2 pb-5 grid content-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-3`}>
      {posts.map((post_item)=>(
        <Post key={post_item.id} thumbnail={post_item.thumbnail} date={post_item.date} title={`${post_item.slug.replace(".md","").slice(0, 35)}...`} link={post_item.slug} />
      ))}
    </div>
    </>
  )
}
export function getStaticProps(){
    const slugs= getPostSlugs();
    const posts= slugs.map((slug)=>(
        getPostByslug(slug)
    ));
    return{
        props:{
            posts
        }
    }
}