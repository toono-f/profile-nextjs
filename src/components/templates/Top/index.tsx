import { Button } from "@/components/atoms/Button";
import { Mv } from "@/components/atoms/Mv";
import { BlogList } from "@/components/molecules/BlogList";
import { TagList } from "@/components/molecules/TagList";
import { Skills } from "@/data/skills";
import { BlogListType } from "@/types/api";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import HandymanIcon from "@mui/icons-material/Handyman";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import { NextSeo } from "next-seo";

const meta = {
  title: "Otono's Portfolio",
  description: "フロントエンドエンジニアのOtonoが制作したポートフォリオです。",
};

type TopProps = {
  blogList: BlogListType;
};

export const Top = ({ blogList }: TopProps) => {
  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: meta.description,
        }}
      />
      <main className="pb-100 pt-120 sp:pb-50 sp:pt-70">
        <Mv />
        <section className="mx-auto mt-30 flex max-w-[1000px] flex-col items-center gap-20 px-20 text-center sp:text-left">
          <h1 className="flex items-center gap-4 text-28 font-bold">
            <AccountCircleIcon sx={{ fontSize: 30 }} />
            <span>About me</span>
          </h1>
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
            <h2 className="flex items-center gap-4 text-24 font-bold">
              <HandymanIcon sx={{ fontSize: 26 }} />
              <span>Skills</span>
            </h2>
            <TagList data={Skills} />
          </section>
          <section className="mt-20 flex flex-col items-center gap-20">
            <h2 className="flex items-center gap-4 text-24 font-bold">
              <RssFeedIcon sx={{ fontSize: 26 }} />
              <span>Blog</span>
            </h2>
            <p>文章を書くのが好きで、時おり記事を書いています。</p>
            <BlogList data={blogList} />
          </section>
          <section className="mt-20 flex flex-col items-center gap-20">
            <h2 className="flex items-center gap-4 text-24 font-bold">
              <EmailIcon sx={{ fontSize: 26 }} />
              <span>Contact</span>
            </h2>
            <p>仕事の依頼等、何かありましたら気軽にお問い合わせください。</p>
            <p>
              <Button href="https://docs.google.com/forms/d/18JeZHlJaTIUSL1EAYyj-deiDUZyunvoxNB09m-IPDFw/viewform?edit_requested=true">お問い合わせ</Button>
            </p>
          </section>
        </section>
      </main>
    </>
  );
};
