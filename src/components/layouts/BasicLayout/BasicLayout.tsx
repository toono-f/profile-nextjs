import styles from "@/components/layouts/BasicLayout/BasicLayout.module.scss";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { NextSeo } from "next-seo";
import { ReactElement } from "react";

export const BasicLayout = (page: ReactElement) => {
  return (
    <>
      <NextSeo
        openGraph={{
          site_name: "Otono's Portfolio",
        }}
      />
      <div className={styles.layout}>
        <Header />
        {page}
        <Footer />
      </div>
    </>
  );
};
