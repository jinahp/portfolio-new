import Header from "./header";
import Introduce from "./introduce";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles["home-wrapper"]}>
      <Header />
      <main>
        <Introduce />
      </main>
    </div>
  );
}
