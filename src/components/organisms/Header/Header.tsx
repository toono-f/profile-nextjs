import styles from "@/components/organisms/Header/Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";
// import { useState } from "react";

export const Header = () => {
  const router = useRouter();
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // useEffect(() => setIsOpen(false), [router]);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {router.pathname === "/" ? (
          <span>Otono&apos;s portfoli</span>
        ) : (
          <Link href="/">
            <a>Otono&apos;s portfolio</a>
          </Link>
        )}
      </h1>

      {/* <nav className={isOpen ? styles.navi_active : styles.navi}>
        <ul className={styles.list}>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? styles.link_active : styles.link}>TOP</a>
            </Link>
          </li>
        </ul>
      </nav> */}
      {/* <div className={isOpen ? styles.cover_active : styles.cover} onClick={() => setIsOpen(false)} /> */}
      {/* <button className={isOpen ? styles.button_active : styles.button} onClick={() => setIsOpen((prev) => !prev)}>
        <span className={styles.buttonline}>
          {[...Array(3)].map((_, i) => (
            <span key={i} className={isOpen ? styles.line_active : styles.line}></span>
          ))}
        </span>
        <span className={styles.manuName}>{isOpen ? "CLOSE" : "MENU"}</span>
      </button> */}
    </header>
  );
};
