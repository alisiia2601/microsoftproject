import Image from 'next/image'
import styles from '../landing/Landing.module.css'
import backgroundImage from '/public/images/bakgrundsbild.png'
import logo from '/public/images/skelleftea_logo_svart.png'

export default function Landing() {
  return (
    <div className={styles.mainContainer}>
        <Image src={backgroundImage} alt="background image" width={27}/>
    </div>
  )
}