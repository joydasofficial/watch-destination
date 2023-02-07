import Head from 'next/head'
import styles from '@/styles/Home.module.css'

//Components
import Landing from '../../components/Landing'
import Trending from 'components/Trending'
import TopProducts from 'components/Categories'
import Featured from 'components/Featured'
import FeaturedProducts from 'components/FeaturedProducts'
import About from 'components/About'
import Footer from 'components/Footer'
import Header from 'components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Landing />
        <Trending />
        <Featured />
        <TopProducts />
        <FeaturedProducts />
        <About />
        <Footer />
      </main>
    </>
  )
}
