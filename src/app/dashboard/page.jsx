import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from '../page.module.css'

export default function About() {
    return (
      <>
      <Navbar />
        
        <main className={styles.main}>
        <div>
          <h1>Hola Dashboard</h1>
          <div>
            <Link href="/">Ir a Home</Link>
          </div>
        </div>
        </main>
      </>
   
    )
  }
  