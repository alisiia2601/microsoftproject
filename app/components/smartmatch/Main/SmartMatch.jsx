'use client'
import styles from '../Main/SmartMatch.module.css'
import UploadCV from '../UploadCV'
import Image from "next/image"
import Ellipse from '/public/images/Ellipse.png'

export default function SmartMatch() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.halfCircle}>
        <Image
          src={Ellipse}
          alt="half circle"
          priority='true'
          /> 
      </div>
        <h1>SmartMatch©</h1>
        <p>
           Ladda upp ditt CV och hämta in LinkedIn för att förfina dina matchningar
        </p>
        <div>
          <UploadCV />
        </div>
    </div>
  )
}
