import Link from 'next/link'
import styles from '../page.module.css'
import Navbar from '@/components/Navbar'

export default function About() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>

      <div className={styles.description}>


            <Link href="/">
              Ir a Home
            </Link>
     
        
      </div>
      </main>
    </>
 
  )
}
