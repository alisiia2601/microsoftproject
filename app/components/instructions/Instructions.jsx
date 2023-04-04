import Link from 'next/link'
import Image from "next/legacy/image"
import styles from '../instructions/Instructions.module.css'
import swipeHandIcon from '/public/images/swipe-hand-icon.png'
import { BsFillCircleFill } from 'react-icons/bs'
import Button from '../buttons/Buttons'

export default function Instructions() {
  return (
    <div className={styles.main}>
      <h3 className={styles.header}>Instruktioner</h3>
      <div className={styles.textRow}>
        <div className={styles.paragraphStyle}>
          <span className={styles.number1}>1</span>
          <p className={styles.paragraph1}>Svep upp för att <br/>börja leta jobb</p>
          <BsFillCircleFill 
            className={styles.dot} 
            size={53}
            style={{
              color: '#000',
              marginRight: '370px'
            }}
          />
        </div>
        <Image 
          className={styles.swipeHandIcon}
          src={swipeHandIcon} 
          alt="project" 
          width={47} 
          height={47} 
          />
        <div className={styles.paragraphStyle}>
          <span className={styles.number2}>2</span>
          <p className={styles.paragraph2}>Klicka på kortet för att läsa mer information om jobbet</p>
        </div>
      </div>
      <Link href={'/Categories'}>
        <Button 
          className={styles.button} 
          variant='skogDark'
          >
          Gå vidare
        </Button>
      </Link>
    </div>
  )
}