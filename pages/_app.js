import '../styles/globals.css'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-[#1a1a1a] text-white z-[500]'>
      <Component {...pageProps} />
    </div>
  )
}
