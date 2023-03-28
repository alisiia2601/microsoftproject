import SavedJobs from "../components/savedJobs/savedJobs";
import styles from './savedpage.module.css'
export default function Savedpage() {
  return (
    <>
      <main className={styles.main}>
        <SavedJobs />
      </main>
    </>
  );
}
