import styles from "@/components/atoms/Mv/Mv.module.scss";

export const Mv = () => {
  return (
    <div className={styles.mv}>
      <p className={styles.icon}>
        <img src="/images/index/mv.jpg" alt="" width="300" height="300" decoding="async" />
      </p>
      <p className={styles.text}>Otono</p>
      <p>Front End Engineer</p>
    </div>
  );
};
