import styles from "@/styles/main.module.scss";

export default function Main() {
  return (
    <div className={styles["main-wrapper"]}>
      <span className={styles["text-hello"]}>안녕하세요.</span>
      <div className={styles["main-title"]}>
        <span className={styles["tracking-in-expand"]}>
          박진아의 포트폴리오입니다.
        </span>
      </div>
    </div>
  );
}
