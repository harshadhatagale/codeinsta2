import React from 'react'
import Giscus from '@giscus/react';


export default function CommentForm() {
    return (
      <>
      <Giscus
      id="comments"
      repo="harshadhatagale/codeinsta2"
      repoId="harshadhatagale/codeinsta2"
      category="Announcements"
      categoryId="DIC_kwDOLXw2jc4CevXh"
      mapping="title"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
      </>
    );
}
