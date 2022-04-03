import type { NextPage } from 'next'
import Head from 'next/head'

import Home from '../components/Home/Home'
import Layout from '../components/Layout/Layout'
import Portfolio from '../components/Portfolio/Portfolio'
import Resume from '../components/Resume/Resume'
import Contact from '../components/Contact/Contact'

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Martin's Portfolio</title>
        <meta name="Martin's Portfolio"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>

      <Layout >
        <Home />
        <Portfolio />
        <Resume />
        <Contact />
      </Layout>
    </div>
  )
}

export default Index
