import Image from "next/legacy/image"
import styles from '../landing/Landing.module.css'
import backgroundImage from '/public/images/bakgrundsbild.png'
import logo from '/public/images/skelleftea_logo_svart.png'

export default function Landing() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logo}>
      <Image src={logo} 
        alt="logo" 
        layout='fixed'
        priority='true'
        width = {82}
        height = {46}
      />
      </div>
      <div className={styles.overlay}>
        
      </div>
      <div className={styles.landingimage}>
        <Image src={backgroundImage}
          alt="background image"
          layout='fill'
          objectFit='cover'
          priority='true'
        />
      </div>
    </div>
  )
}