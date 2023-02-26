import '../styles/globals.css'
import '../styles/header/menu.css'
import Head from 'next/head';
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Head >
        <link rel="shortcut icon" href='/beta.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
