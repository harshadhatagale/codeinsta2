
import Header from "@/components/header1";
import { Head } from "next/head";
import HeadTag from "@/components/HeadTag";
export default function Home() {
  return (
    <>
    <HeadTag title="Code Insta" description="Explore comprehensive coding tutorials on our blog, where we demystify programming concepts, provide hands-on examples, and guide you through real-world projects. From beginner-friendly introductions to advanced coding challenges, our tutorials cover a wide range of programming languages and technologies" canUrl="https://www.codeinsta.tech/"/>
    <div>
    <Header content="Latest Posts" />
    </div>
    </>
  );
}
