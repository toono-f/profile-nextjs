import styles from "@/components/atoms/Mv/Mv.module.scss";
// import { useInView } from "react-intersection-observer";

export const Mv = () => {
  // const { ref, inView } = useInView({
  //   rootMargin: "0px",
  //   triggerOnce: true,
  // });

  return (
    <div className={styles.mv}>
      <p className={styles.icon}>
        <img src="/images/index/mv.jpg" alt="" width="300" height="300" decoding="async" />
      </p>
      <p className={styles.text}>Otono</p>
      <p>Front End Engineer</p>

      {/* <p ref={ref} className={inView ? styles.text_open : styles.text}>
        「敵は己の中にあり」
      </p> */}
    </div>
  );
};
