import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/lazy'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'
import HeroBanner from '../components/HeroBanner'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col md:w-screen md:max-w-[1170px]">
      <Head>
        <title>Forrest Dickison Fine Art & Illustration</title>
      </Head>
      <StateContext>
        <HeroBanner/>
        <div className="flex-grow">
          <Toaster
            containerStyle={{
              positon: 'absolute',
              top: '25%',
              bottom: '25%',
            }}
            toastOptions={{
              style: {
                minWidth: 'fit-content',
                backgroundColor: '#fff',
                border: '1px solid #000',
                padding: '2rem',
                color: '#000',
                boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
              },
            }}
          />
          <Component {...pageProps} />
        </div>
      </StateContext>
      <Footer/>
    </div>
  )
}

export default MyApp
