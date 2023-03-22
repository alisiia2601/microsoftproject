// import Image from 'next/image'
import { Inter } from 'next/font/google'
import Instructions from './components/instructions/Instructions'
import styles from './page.module.css'

const inter = Inter({
  subsets: ['latin'],
  style: 'normal',
  weight: ['200', '400', '600', '700', '800'],
})

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Instructions />
      {/* <h1>Hej</h1> */}
    </main>
  )
}