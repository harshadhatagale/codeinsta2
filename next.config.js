
const withMDX= require("@next/mdx")
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions:["js", "jsx", "mdx","tsx","ts", "md"]
};
module.exports= withMDX(nextConfig)