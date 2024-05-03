import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="google-site-verification" content="cC14gQ_L4efyo09WY__vfk659sty_bFqlShlO3Z1OyY" />
        <meta name="google-adsense-account" content="ca-pub-3944085814863048" />
        <script dangerouslySetInnerHTML={{
          __html: `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PP9M53RB');
  `
        }} />
        <link rel="icon" type="image/png" sizes="32x32" href="logo.png" />
      </Head>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout></>
  );
}
