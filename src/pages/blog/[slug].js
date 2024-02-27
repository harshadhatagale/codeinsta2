import React from 'react'
import { useRouter } from 'next/router';
import { getPostByslug, getPostSlugs } from '../../../utils/fetchPosts';
import ReactMarkdown from "react-markdown"
import Header2 from '@/components/header2';
import { Merriweather } from 'next/font/google';
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/atom-one-dark.css"
import styles from "../../styles/post_detail_view.module.css"
import HeadTag from '@/components/HeadTag';


const merry= Merriweather({
  subsets:["latin"],
  weight:["300","400","700","900"]
})
export default function DetailPostView({ post }) {
  const router = useRouter();
  const currentUrl= router.asPath;
  return (
    <>
     <HeadTag title={post.slug.replace(".md","")} description={post.content.slice(0,160)} canUrl={`https://codeinsta.tech${currentUrl}`}/>
    <div className=" dark:text-white leading-loose lg:px-20 md:px-18 px-5">
    <div>
       <Header2 content= {post.slug.replace(".md","")} date={post.date} />
       <div className={styles.content}>
         <ReactMarkdown rehypePlugins={rehypeHighlight}  className={merry.className}>{post.content}</ReactMarkdown>
       </div>
      </div>
    </div>
    </>
  )
}
export async function getStaticPaths() {
  const slugs = getPostSlugs();
  const paths = slugs.map((slug) => (
    {
      params: { slug },
    }
  ));
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const post = getPostByslug(params.slug);
  return {
    props: {
      post,
    }
  }
}