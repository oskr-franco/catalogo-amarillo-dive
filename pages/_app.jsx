import Head from 'next/head'
import { Alumni_Sans } from '@next/font/google'

import Store from '../store/Store';
import ModalWrapper from '../components/molecules/modal/ModalWrapper'
import Header from '../components/organisms/header/Header'

import '../styles/globals.css'

const alumni = Alumni_Sans({
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  <Head>
    <title>Catalogo Amarillo</title>
    <meta name="description" content="Find the service exactly as you need" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  return (
    <div style={{position: "relative"}} 
      className={alumni.className}
    >
      <Store>
        <Header />
        <Component {...pageProps} />
        <ModalWrapper />
      </Store>
    </div>
  )
}

export default MyApp
