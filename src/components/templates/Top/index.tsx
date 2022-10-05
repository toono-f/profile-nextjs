import { Button } from "@/components/atoms/Button";
import { MovieModal } from "@/components/atoms/MovieModal";
import { Mv } from "@/components/atoms/Mv";
import { Title } from "@/components/atoms/Title";
import { TagList } from "@/components/molecules/TagList";
import { Skills } from "@/data/Skills";
import { BlogListType } from "@/types/api";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import HandymanIcon from "@mui/icons-material/Handyman";
import { useState } from "react";
// import { fetcher } from "@/hooks/fecther";
// import useSWR from "swr";

type TopProps = {
  blogList: BlogListType;
};

export const Top = ({ blogList }: TopProps) => {
  // const { data } = useSWR<UsersType>(`${process.env.NEXT_PUBLIC_API_PATH}/users`, fetcher);

  const [play, isPlay] = useState<boolean>(false);

  return (
    <main className="pb-100 pt-120 sp:pb-50 sp:pt-70">
      <Mv />
      <section className="mx-auto mt-30 flex max-w-[1000px] flex-col items-center px-20 text-center sp:text-left">
        <Title>
          <AccountCircleIcon sx={{ fontSize: 26 }} />
          <span>About</span>
        </Title>

        {/* {data?.users.map((item, key) => {
          return <p key={key}>{item.age}</p>;
        })} */}

        <p className="mt-20 leading-lg">
          1993年生まれ。北海道出身、東京在住のWebエンジニア。
          <br className="sp:hidden" />
          京都の大学を卒業後、Webメディア事業会社でのライティング、
          <br className="sp:hidden" />
          Web制作会社でコーダー（マークアップ）を経験し、
          <br className="sp:hidden" />
          現在は自社開発でフロントエンドエンジニアとして就業中。
        </p>
        <p className="mt-20 leading-lg">
          趣味はプロ野球観戦。好きな球団は
          <button className="underline" onClick={() => isPlay(true)}>
            北海道日本ハムファイターズ。
          </button>
          <br className="sp:hidden" />
          休日は友人とチャットを繋げながらもくもく作業したり、
          <br className="sp:hidden" />
          美味しいケーキを食べに行くのが好きです。
        </p>
        <section className="mt-60 flex flex-col items-center gap-20">
          <Title>
            <HandymanIcon sx={{ fontSize: 26 }} />
            <span>Skills</span>
          </Title>
          <TagList data={Skills} />
        </section>

        {/* <section className="mt-60 flex flex-col items-center gap-20">
          <Title>
            <RssFeedIcon sx={{ fontSize: 26 }} />
            <span>Blog</span>
          </Title>
          <BlogList data={blogList} />
        </section> */}

        <section className="mt-60 flex flex-col items-center gap-20">
          <Title>
            <EmailIcon sx={{ fontSize: 26 }} />
            <span>Contact</span>
          </Title>
          <p className="leading-lg">仕事の依頼等、何かありましたら気軽にお問い合わせください。</p>
          <Button href="https://docs.google.com/forms/d/18JeZHlJaTIUSL1EAYyj-deiDUZyunvoxNB09m-IPDFw/viewform?edit_requested=true">お問い合わせ</Button>
        </section>

        <MovieModal id="XgDWlvNXtG8" play={play} isPlay={isPlay} />
      </section>
    </main>
  );
};
