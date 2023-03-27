'use client'
import styles from '../Main/SmartMatch.module.css'
import UploadCV from '../UploadCV'

export default function SmartMatch() {
  return (
    <div className={styles.mainContent}>
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
