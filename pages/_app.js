import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Head >
       <link rel="shortcut icon" href='/beta_large.ico' />
      <Component {...pageProps} />
    </Head>)
}

export default MyApp
