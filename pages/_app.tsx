/* eslint-disable @next/next/no-css-tags */
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Lais Beunardeau</title>
        <meta name="description" content="Modern Jazz dancer" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Lais Beunardeau" />
        {/* bewteen 60 and 90 characters but not longer than 100 */}
        <meta property="og:title" content="Lais Beunardeau" />
        <meta property="og:description" content="Modern Jazz dancer" />
        <meta
          property="og:image"
          content="https://laisbeunardeau.art/logo.jpg"
        />
        <meta property="og:url" content="https://laisbeunardeau.art" />
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
        <script
          src="https://unpkg.com/video.js/dist/video.min.js"
          async
          defer
        />
        {/* <script src="/picturefill.min.js" async /> */}
        {/* <script src="/youtube.min.js" async /> */}
        <script
          async
          defer
          data-website-id="793b1d37-a4fe-4d54-872d-9724e172c1f1"
          src="https://portfolio-umami.vercel.app/umami.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
