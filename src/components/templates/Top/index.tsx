import { Mv } from "@/components/atoms/Mv";
import { TagList } from "@/components/molecules/TagList";
import { Skills } from "@/data/skills";
import { NextSeo } from "next-seo";

export const Top = () => {
  return (
    <>
      <NextSeo
        title="Otono's Portfolio"
        description="フロントエンドエンジニアのOtonoが制作したポートフォリオです。"
        openGraph={{
          title: "Otono's Portfolio",
          description: "フロントエンドエンジニアのOtonoが制作したポートフォリオです。",
        }}
      />
      <main className="py-100 sp:py-50">
        <Mv />
        <section className="mx-auto mt-30 flex max-w-[1000px] flex-col items-center gap-20 text-center sp:px-20 sp:text-left">
          <h1 className="text-32 font-bold">About me</h1>
          <p>
            1993年生まれ。北海道出身、東京在住のWebエンジニア。
            <br className="sp:hidden" />
            京都の大学を卒業後、Webメディア事業会社でのライティング、
            <br className="sp:hidden" />
            Web制作会社でコーダー（マークアップ）を経験し、
            <br className="sp:hidden" />
            現在は自社開発企業でフロントエンドエンジニアとして就業中。
          </p>
          <p>
            趣味はプロ野球観戦。好きな球団は北海道日本ハムファイターズ。
            <br className="sp:hidden" />
            休日は友人とチャットを繋げながらもくもく作業したり、
            <br className="sp:hidden" />
            美味しいケーキを食べに行くのが好きです。
          </p>
          <section className="mt-20 flex flex-col items-center gap-20">
            <h2 className="text-24 font-bold">Skills</h2>
            <TagList data={Skills} />
          </section>
        </section>
      </main>
    </>
  );
};
