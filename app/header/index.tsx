import Image from "next/image";
import styles from "../../styles/header.module.scss";

export default function Header() {
  return (
    <header className={styles["header-wrapper"]}>
      <button className={styles["header-button"]}>
        <Image
          src="/icons/menu.svg"
          alt="icon-menu"
          height={60}
          width={60}
          className={styles["icon-menu"]}
        />
      </button>
      <div className={styles["header-title-wrapper"]}>
        <div className={styles["header-button-box"]}>
          <button className={styles["header-title-button"]}>
            <div className={styles["header-title"]}>홈</div>
          </button>
          <button className={styles["header-title-button"]}>
            <div className={styles["header-title"]}>자기소개</div>
          </button>
          <button className={styles["header-title-button"]}>
            <div className={styles["header-title"]}>기술</div>
          </button>
          <button className={styles["header-title-button"]}>
            <div className={styles["header-title"]}>프로젝트</div>
          </button>
        </div>
        <div className={styles["header-theme-box"]}>
          <button className={styles["header-theme-button"]}>
            <Image
              src="/icons/tools.svg"
              alt="icon-tools"
              height={60}
              width={60}
              className={styles["icon-tools"]}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
