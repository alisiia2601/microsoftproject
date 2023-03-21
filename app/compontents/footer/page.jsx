import Image from 'next/image'
import styles from '../footer/Footer.module.css'
import { RiUser3Fill } from 'react-icons/ri'
import { RiBookmarkFill } from 'react-icons/ri'
import jobFlowIcon from '/public/images/jobFlowIcon.svg'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.row}>
        <span className={styles.footerIcon1}>
        <Image src={jobFlowIcon} alt="project" width={20} />
        </span>
      </div>
      <div className={styles.row}>
        <span className={styles.footerIcon2}>
          <RiUser3Fill />
        </span>
      </div>
      <div className={styles.row}>
        <span className={styles.footerIcon3}>
          <RiBookmarkFill />
        </span>
      </div>
    </div>
  )
}