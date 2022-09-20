import styles from "@/components/atoms/Button/Button.module.scss";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export const Button = ({ href, children }: ButtonProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.button}>
      {children}
    </a>
  );
};
