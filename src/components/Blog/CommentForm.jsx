import React from 'react'
import { useEffect } from 'react';

export default function CommentForm() {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.setAttribute('repo', 'harshadhatagale/codeinsta-comments');
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute('theme', 'github-light');
      script.setAttribute('crossorigin', 'anonymous');
      script.async = true;
  
      document.getElementById('comments').appendChild(script);
  
      return () => {
        // Cleanup script on unmount if necessary
        document.getElementById('comments').removeChild(script);
      };
    }, []);
  
    return (
      <>
      <div id="comments"></div>
      </>
    );
}
