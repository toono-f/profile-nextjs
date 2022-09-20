import styles from "@/components/atoms/Spacer/Spacer.module.scss";

type SpacerProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
};

export const Spacer = ({ size }: SpacerProps) => {
  const space = `space_${size}`;
  return <div className={styles[space]}></div>;
};
