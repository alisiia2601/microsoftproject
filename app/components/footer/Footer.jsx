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
          <Image src={jobFlowIcon} alt="project" width={31} />
        </span>
      </div>
      <div className={styles.row}>
        <RiUser3Fill className={styles.footerIcon2} size={27}/>
      </div>
      <div className={styles.row}>
        <RiBookmarkFill className={styles.footerIcon2} size={27}/>
      </div>
    </div>
  )
}