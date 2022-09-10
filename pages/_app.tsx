import '../styles/globals.css';
import type { AppProps } from 'next/app';

console.log(123);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
