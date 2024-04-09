---
title: How to create Top loading bar in NextJs 
date: 8 Apr 2024
thumbnail: /Post_Images/post_6/thumb_image.png
description: Blockchain is a decentralized , distributed ledger technology that records transection across multiple   computers in a way  that is secure, transparent & immutable It consists of series of blocks, each containing a cryptographic hash of previous block , creating a chain blocks. 
hor_thumb: /Post_Images/post_6/hor_thumb.png
---
## Introduction
In this blog post, we are going to create create top loading bar in next js website.It is very easy to create.\
Top loading bar is necessary in every website. You have seen in many website like facebook, youtube & instagram etc. that, when you click on any post or a video, on the top of navbar of web page a small progress bar is displayed & when content is loaded it get hidden automatically. For example, 
## Project setup
## Installing Depencies
```bash
// for nodejs
npm install nextjs-toploader
// for yarn
yarn add nextjs-toploader
```
## Creating Top loading bar
```jsx
import React from 'react'

import {Poppins} from "next/font/google"
const popins= Poppins({
    subsets:["latin"],
    weight:['100','200', '300', '400','500','600','700','800','900']
})
export default function Header(props) {
  return (
    <div> <h2 className={` ${popins.className} my-2 text-black dark:text-white font-bold text-xl`}>{props.content}</h2></div>
  )
}
```
## Addition properties
## Conclusion