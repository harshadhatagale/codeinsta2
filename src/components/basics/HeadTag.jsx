import React from 'react'
import Head from 'next/head'
export default function HeadTag(props) {
  return (
    <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description}/>
        <link rel='canonical' content={props.canUrl}/>
    </Head>
  )
}
