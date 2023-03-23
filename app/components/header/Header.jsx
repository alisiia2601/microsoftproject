import Image from "next/legacy/image"
import Link from 'next/link'
import styles from '../header/Header.module.css'
import svartLogo from '/public/images/skelleftea_logo_svart.png'
import notIcon from '/public/images/notification-icon.png'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.row}>
      <Link href="/Landing">
        <span className={styles.headerIcon1}>
          <Image src={svartLogo} alt="logo" />
        </span>
      </Link>
      </div>

      <div className={styles.row}>
        <span className={styles.headerIcon2}>
          <Image src={notIcon} alt="logo" />
        </span>
      </div>
    </div>
  )
}