import styles from "@/components/layouts/BasicLayout/BasicLayout.module.scss";
import { ReactElement } from "react";

export const BasicLayout = (page: ReactElement) => {
  return <div className={styles.layout}>{page}</div>;
};
