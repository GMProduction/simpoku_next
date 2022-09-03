import { Navbar } from 'flowbite-react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  
  
  <>
  <div className='h-[50px] bg-red hidden sm:block'/>
  <Navbar/>
  <Component {...pageProps} />
  </>
  );
}

export default MyApp
