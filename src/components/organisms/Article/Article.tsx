import styles from "@/components/organisms/Article/Article.module.scss";
import { BlogType } from "@/types/api";

type ArticleProps = {
  data: BlogType;
};

export const Article = ({ data }: ArticleProps) => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.thumbnail}>
        <img src={data.eyecatch.url} alt="" decoding="async" />
      </p>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.content }}></div>
    </article>
  );
};
