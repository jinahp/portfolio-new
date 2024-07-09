"use client";
import Image from "next/image";
import styles from "@/styles/header.module.scss";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles["header-wrapper"]}>
      <button className={styles["header-button"]} onClick={toggleMenu}>
        <Image
          src="/icons/menu.svg"
          alt="icon-menu"
          height={60}
          width={60}
          className={styles["icon-menu"]}
        />
      </button>
      <div
        className={`${styles["header-title-wrapper"]} ${
          isOpen ? styles["active"] : ""
        }`}
      >
        {isOpen && (
          <nav ref={menuRef}>
            <ul className={styles["header-button-box"]}>
              <li className={styles["header-title-button"]}>
                <Link href="/" className={styles["header-title"]}>
                  홈
                </Link>
              </li>
              <li className={styles["header-title-button"]}>
                <Link href="/about" className={styles["header-title"]}>
                  자기소개
                </Link>
              </li>
              <li className={styles["header-title-button"]}>
                <Link href="/skills" className={styles["header-title"]}>
                  기술
                </Link>
              </li>
              <li className={styles["header-title-button"]}>
                <Link href="/projects" className={styles["header-title"]}>
                  프로젝트
                </Link>
              </li>
            </ul>
          </nav>
        )}
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
    </header>
  );
}
