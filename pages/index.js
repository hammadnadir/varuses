import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Footer, Header } from '../components/common'
import Banner from '../components/Home/banner'
import Code from '../components/Home/Code'
import Authentication from '../components/Home/Authentication'
import Pricing from '../components/Home/Pricing'
import Product from '../components/Home/Product'
import Feature from '../components/Home/Feature'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Varuses</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner />
        <Code/>
        <Authentication/>
        <Pricing/>
        <Product/>
        <Feature/>
        <Footer />
      </main>
    </>
  )
}
