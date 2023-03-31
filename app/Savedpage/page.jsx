import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SavedJobs from "../components/savedJobs/savedJobs";
import styles from './savedpage.module.css'
import backgroundImage from '/public/images/bakgrundsbild.png'
import Image from "next/image"

export default function Savedpage() {
  return (
    <>
    <main className={styles.main}>
    <Image
        src={backgroundImage}
        alt="background image"
        priority='true'
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} /> 
        <div className={styles.overlay}></div>
      <Header />
        <SavedJobs />
      <Footer/>
      </main>
    </>
  );
}
