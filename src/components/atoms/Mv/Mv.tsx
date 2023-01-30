import styles from "@/components/atoms/Mv/Mv.module.scss";

export const Mv = () => {
  return (
    <div className={styles.mv}>
      <p className={styles.icon}>
        <picture>
          <source srcSet="/images/index/mv.webp" type="image/webp" />
          <img
            src="/images/index/mv.png"
            alt=""
            width="300"
            height="300"
            decoding="async"
          />
        </picture>
      </p>
      <p className={styles.text}>Otono</p>
      <p>Front End Engineer</p>
    </div>
  );
};
