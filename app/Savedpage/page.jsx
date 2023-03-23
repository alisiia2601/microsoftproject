import SavedJobs from "../components/savedJobs/savedJobs";
import Header from '/app/components/Header/Header.jsx'
import Footer from '/app/components/footer/Footer.jsx'

export default function Savedpage() {
  return (
    <>
      <main>
        <Header />
        <SavedJobs />
        <Footer />
      </main>
    </>
  );
}