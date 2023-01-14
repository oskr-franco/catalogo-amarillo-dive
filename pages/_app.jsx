import Head from 'next/head'

import Header from '../components/organisms/header/Header'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  <Head>
    <title>Catalogo Amarillo</title>
    <meta name="description" content="Find the service exactly as you need" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  return (
    <div style={{position: "relative"}}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
