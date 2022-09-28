import styles from "@/components/molecules/BlogList/BlogList.module.scss";
import { BlogListType } from "@/types/api";
import Link from "next/link";

type blogListProps = {
  data: BlogListType;
};

export const BlogList = ({ data }: blogListProps) => {
  return (
    <ul className={styles.blogList}>
      {data.map((item, index) => (
        <li key={index} className={styles.item}>
          <Link href={`/blog/${item.id}/`}>
            <a className={styles.link}>
              <img src={item.eyecatch.url} alt="" decoding="async" />
              <p className={styles.text}>{item.title}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
