import styles from "@/styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer-wrapper"]}>
      <p className={styles["footer-text"]}>
        © 2024. Web Front-end Developer Portfolio.
        <p>
          Designed by
          <span className={styles["my-name"]}> Jinah Park.</span> All rights
          reserved.
        </p>
      </p>
    </footer>
  );
}
