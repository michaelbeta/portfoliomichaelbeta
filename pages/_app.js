import '../styles/globals.css'
import Head from 'next/head';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head >
        <link rel="shortcut icon" href='/beta_large.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
