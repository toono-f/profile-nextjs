import styles from "@/components/atoms/Mv/Mv.module.scss";

export const Mv = () => {
  return (
    <div className={styles.mv}>
      <p className={styles.icon}>
        <img src="/images/index/mv.jpg" alt="" />
      </p>
      <p className={styles.text}>Otono</p>
      <p>Front End Engineer</p>
    </div>
  );
};
