// Ingreso a evento deportivo no sabia que nombre darle
// Login de registro se: Sports Event
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Loginse.module.css";
import InputButtonTitle from "../components/InputButtonTitle/index";

function SignupSE() {
  return (
    <>
      <Navbar />
      <section className={styles.section}>
        <div className={styles.sectionInput}>
          <InputButtonTitle
            titleU="Código"
            nameU="sportsEventCode"
            placeholderU="Ingresa código de acceso"
            contentU="Registrar"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SignupSE;
