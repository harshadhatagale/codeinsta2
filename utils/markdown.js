import React from 'react'
import remark2React from 'remark-react'
import toc from 'remark-toc'
import markdown from "remark-parse"
import { unified } from 'unified'
export default function Markdown({content}) {
    const result= unified()
    .use(markdown)
    .use(()=>(tree)=> toc.run(tree,{tight: true, maxDepth: 2}))
    .use(remark2React)
    .process(content)
  return (
    <div>{result.contents}</div>
  )
}
