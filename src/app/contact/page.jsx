import Navbar from "@/components/Navbar";
import Link from 'next/link'
import styles from '../page.module.css'

export default function Contact() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <Link href="/"> 
                    Contact page
                </Link>
            </main>
        </>
    )
}