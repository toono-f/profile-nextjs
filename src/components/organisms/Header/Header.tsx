import styles from "@/components/organisms/Header/Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <header className={router.pathname === "/" ? styles.header_color : styles.header}>
      <h1 className={styles.title}>
        <Link href="/">
          <a>Otono&apos;s portfolio</a>
        </Link>
      </h1>
    </header>
  );
};
