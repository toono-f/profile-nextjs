// import { Article } from "@/components/organisms/Article";
import { BlogType } from "@/types/api";
import { NextSeo } from "next-seo";
import Link from "next/link";

const meta = {
  title: "Otono's Portfolio",
  description: "フロントエンドエンジニアのOtonoによるブログ記事です。",
};

type BlogDetailProps = {
  data: BlogType;
};

export const BlogDetail = ({ data }: BlogDetailProps) => {
  return (
    <>
      <NextSeo
        title={`${data.title} | ${meta.title}`}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: meta.description,
        }}
      />
      <main className="py-100 px-20 ">
        {/* <Article data={data} /> */}
        <p className="text-center">準備中です。</p>
        <p className="mt-20 text-center">
          <Link href="/">
            <a className="underline">TOPに戻る</a>
          </Link>
        </p>
      </main>
    </>
  );
};
