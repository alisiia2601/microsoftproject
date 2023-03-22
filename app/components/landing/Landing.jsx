import Image from 'next/image'
import styles from '../landing/Landing.module.css'
import backgroundImage from '/public/images/bakgrundsbild.png'
import logo from '/public/images/skelleftea_logo_svart.png'

export default function Landing() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logo}>
      <Image src={logo} alt="logo" width={107}/>
      </div>
      <div className={styles.backimage}>
        <Image src={backgroundImage}
        alt="background image"
        layout="fill"
        objectFit='cover'
        />
      </div>
    </div>
  )
}