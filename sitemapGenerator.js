
const fs = require('fs');

// Array of blog post URLs
const posts = [
    "/blog/Introduction%20to%20Bitcoin.md",
    "/blog/Introduction%20to%20Blockchain.md",
    "/blog/can%20gdevelop%20make%20multiplayer%20games.md",
    "/blog/how%20to%20create%20svg%20animations%20with%20css%20only.md",
    "/blog/how%20to%20create%20top%20loading%20bar%20in%20nextjs.md",
    "/blog/top%2010%20html%20interview%20questions%20in%202024.md",
    "/blog/top%2010%20reactjs%20interview%20questions%20in%202024.md",
    "/blog/what%20are%20the%20resources%20to%20learn%20django.md",
    "/blog/what%20is%20IronPDF.md",
    "/blog",
    "/privacy_policy",
    "/about",
  // Add more post URLs as needed
];

// Initialize sitemap content
let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add blog post URLs to the sitemap content
posts.forEach(post => {
  sitemapContent += `
  <url>
    <loc>https://www.codeinsta.tech${post}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
});

// Close the sitemap content
sitemapContent += `
</urlset>`;

// Write sitemap content to file
fs.writeFileSync('./public/sitemap.xml', sitemapContent);

console.log('Sitemap generated successfully.');
