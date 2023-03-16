import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return(

  <>
  <Head>
    <title>Salman&apos;s Portfolio</title>
    <link rel='shortcut icon' href='/wave.png' />
  </Head>
  
  <Component {...pageProps} />
  </>
  ) 
}
