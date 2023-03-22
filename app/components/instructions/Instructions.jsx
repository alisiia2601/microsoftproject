import Link from 'next/link'
import Image from "next/legacy/image"
import styles from '../instructions/Instructions.module.css'
import logo from '/public/images/skelleftea_logo_svart.png'
import swipeHandIcon from '/public/images/swipe-hand-icon.png'

export default function Instructions() {
  return (
    <div className={styles.main}>
      {/* <div className={styles.row}>
        <Link href="/">
          <span className={styles.headerLogo}>
            <Image src={logo} alt="logo" width={107} />
          </span>
        </Link>
      </div> */}
      
      <h3 className={styles.header}>Instruktioner</h3>
      <div className={styles.textRow}>
        <div className={styles.paragraphStyle}>
          <span className={styles.number}>1</span>
          <p className={styles.paragraph}>Svep upp för att <br/>börja leta jobb</p>
        </div>
        <Image 
          className={styles.swipeHandIcon}
          src={swipeHandIcon} 
          alt="project" 
          width={47} 
          />
        <div className={styles.paragraphStyle}>
          <span className={styles.number}>2</span>
          <p className={styles.paragraph}>Klicka på kortet för att <br/>läsa mer information om jobbet</p>
        </div>
      </div>
    </div>
  )
}