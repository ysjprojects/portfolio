import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'flag-icons/css/flag-icons.min.css';

import '../styles/globals.css';
import Footer from '../components/Footer';
import Header from  '../components/Header';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
