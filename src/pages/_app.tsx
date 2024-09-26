import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head';

import '../styles/index.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        <Head>
            <title>Фронтендинариум</title>
        </Head>
        <Component {...pageProps} />
    </Layout>
  );
}