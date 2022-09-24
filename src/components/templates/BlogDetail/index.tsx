import { Button } from "@/components/atoms/Button";
import { Article } from "@/components/organisms/Article";
import { BlogType } from "@/types/api";
import { NextSeo } from "next-seo";

const Meta = {
  description: "フロントエンドエンジニアのおとのによるブログ記事です。",
  type: "article",
};

type BlogDetailProps = {
  data: BlogType;
};

export const BlogDetail = ({ data }: BlogDetailProps) => {
  return (
    <>
      <NextSeo
        title={data.title}
        description={Meta.description}
        openGraph={{
          title: data.title,
          description: Meta.description,
          type: Meta.type,
        }}
      />
      <main className="py-100 px-20">
        <Article data={data} />
        <p className="mt-40 text-center">
          <Button href="/">TOPに戻る</Button>
        </p>
      </main>
    </>
  );
};
