import styles from "@/styles/home.module.scss";
import Header from "./header";
import Main from "./main/main";

export default function Home() {
  return (
    <div className={styles["home-wrapper"]}>
      <Header />
      <main>
        <Main />
      </main>
    </div>
  );
}
