// import Image from 'next/image'
import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import Head from 'next/head'
//import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            Get started by editing&nbsp;
            <code className={styles.code}>src/app/page.js</code>
          </div>
       
        </div>
      </main>
    </div>
  )
}
