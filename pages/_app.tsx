import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/customized-bootstrap.css'
import type { AppProps } from 'next/app'
import { ScrollPositionProvider } from '../contexts/ScrollPositionContext';
import { LangContextProvider } from '../contexts/LangContext/LangContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollPositionProvider>
      <LangContextProvider>
        <Component {...pageProps} />
      </LangContextProvider>
    </ScrollPositionProvider>
  )
}

export default MyApp
