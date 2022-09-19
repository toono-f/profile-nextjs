import { Tag, TagProps } from "@/components/atoms/Tag";
import styles from "@/components/molecules/TagList/TagList.module.scss";

type TagListProps = {
  data: TagProps[];
};

export const TagList = ({ data }: TagListProps) => {
  return (
    <ul className={styles.tagList}>
      {data.map((item, index) => (
        <li key={index}>
          <Tag name={item.name} />
        </li>
      ))}
    </ul>
  );
};
