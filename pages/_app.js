import '../styles/globals.css'
import HeroBanner from '../components/HeroBanner'

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <main>
      <HeroBanner/>
    </main>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
