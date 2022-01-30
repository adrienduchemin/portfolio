/* eslint-disable @next/next/no-css-tags */
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Lais Beunardeau</title>
        <meta name="description" content="Lais Beunardeau portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Lais Beunardeau" />
        {/* bewteen 60 and 90 characters but not longer than 100 */}
        <meta property="og:title" content="Lais Beunardeau" />
        <meta property="og:description" content="Modern Jazz dancer" />
        <meta
          property="og:image"
          content="https://cocky-noyce-2131f3.netlify.app/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://cocky-noyce-2131f3.netlify.app"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          type="text/css"
          rel="stylesheet"
          href="lightgallery/css/lightgallery.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="lightgallery/css/lg-video.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="lightgallery/css/lg-zoom.css"
        />
        <link
          type="text/css"
          href="https://unpkg.com/video.js/dist/video-js.min.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/video.js/dist/video.min.js" async />
        {/* <script src="/picturefill.min.js" async /> */}
        {/* <script src="/youtube.min.js" async /> */}
        <script
          async
          defer
          data-website-id="b7b30083-9b36-4db4-b66d-b840101cd709"
          src="https://umami-alpha-pink.vercel.app/umami.js"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
