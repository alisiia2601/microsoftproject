import Image from "next/legacy/image"
import styles from '../header/Header.module.css'
import blackLogo from '/public/images/navbar.png'
import Link from 'next/Link'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.row}>
        <Link href="/Landing">
        <span className={styles.headerIcon1}>
          <Image src={blackLogo} alt="logo" />
        </span>
        </Link>
      </div>
    </div>
  )
}