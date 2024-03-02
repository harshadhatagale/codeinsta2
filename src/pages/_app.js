import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="cC14gQ_L4efyo09WY__vfk659sty_bFqlShlO3Z1OyY" />
 <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3944085814863048"
     crossorigin="anonymous"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PP9M53RB');
  `
        }} />
      </Head>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout></>
  );
}
