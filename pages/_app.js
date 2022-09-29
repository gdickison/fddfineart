import '../styles/globals.css'
import Head from 'next/head'
import HeroBanner from '../components/HeroBanner'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Forrest Dickison Fine Art & Illustration</title>
      </Head>
      <main>
        <HeroBanner/>
      </main>
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
  )
}

export default MyApp
