import styles from "@/components/atoms/Title/Title.module.scss";
import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

export const Title = ({ children }: TitleProps) => {
  return <h2 className={styles.title}>{children}</h2>;
};
