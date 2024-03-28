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
import { Roboto } from 'next/font/google';
import Head from 'next/head';
const roboto= Roboto({
  subsets:["latin"],
  weight:["100","300","400","500","700","900"]
})
const merry= Merriweather({
  subsets:["latin"],
  weight:["300","400","700","900"]
})
export default function DetailPostView({ post }) {

  const router = useRouter();
  const currentUrl= router.asPath;
  return (
    <>
    <Head>
      <title>{post.title}</title>
      <meta name='description' content={post.content} />
      <meta property='og:title' content={post.title} />
      <meta property='og:description' content={post.description} />
      <meta property='og:image' content={post.thumbnail} />
      <meta property='og:url' content='{`https://codeinsta.tech/blog/${post.slug}`}'/>
      <meta property='og:type' content='article'/>
    </Head>
     <HeadTag title={post.slug.replace(".md","")} description={post.content.slice(0,160)} canUrl={`https://codeinsta.tech${currentUrl}`}/>
     <Header2 content= {post.slug.replace(".md","")} date={post.date} />
    <div className=" dark:text-white leading-loose lg:px-56 md:px-18 px-6">
    <div>
       <div className={`${styles.content}`}>
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