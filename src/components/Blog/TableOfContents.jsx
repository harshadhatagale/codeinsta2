// components/TableOfContents.js
import { useEffect } from 'react';

const TableOfContents = () => {
  useEffect(() => {
    const toc = document.getElementById('table-of-contents');
    if (toc) {
      const headings = document.querySelectorAll('ul li h3');
      if (headings.length > 0) {
        const tocList = document.createElement('ul');
        headings.forEach((heading) => {
          const listItem = document.createElement('li');
          const anchor = document.createElement('a');
          anchor.textContent = heading.textContent;
          anchor.setAttribute('href', '#' + heading.id);
          anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop - 100, // Adjust for any fixed header
                behavior: 'smooth',
              });
            }
          });
          listItem.appendChild(anchor);
          tocList.appendChild(listItem);
        });
        toc.appendChild(tocList);
      }
    }
  }, []);

  return (
    <nav id="table-of-contents">
      <h2>Table of Contents</h2>
    </nav>
  );
};

export default TableOfContents;
