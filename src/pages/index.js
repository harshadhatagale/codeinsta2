import { getPostSlugs, getPostByslug } from "../../utils/fetchPosts";
import HeadTag from "@/components/basics/HeadTag";
import { FacebookShareButton, FacebookIcon } from "react-share";
import LatestPosts from "@/components/Blog/LatestPost";
export default function Home({ latestPosts }) {
  return (
    <>
      <div className="px-5">
        <HeadTag title="Code Insta" description="Explore comprehensive coding tutorials on our blog, where we demystify programming concepts, provide hands-on examples, and guide you through real-world projects. From beginner-friendly introductions to advanced coding challenges, our tutorials cover a wide range of programming languages and technologies" canUrl="https://www.codeinsta.tech/" />
        <div>
          <LatestPosts posts={latestPosts.slice(0, 6)} />
        </div>
      </div>
    </>
  );
}
export function getStaticProps() {
  const slugs = getPostSlugs();
  const latestPosts = slugs.map((slug) => (
    getPostByslug(slug)
  ));
  return {
    props: {
      latestPosts
    }
  }
}