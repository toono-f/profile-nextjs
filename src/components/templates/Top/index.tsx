import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import HandymanIcon from "@mui/icons-material/Handyman";
import RssFeedIcon from "@mui/icons-material/RssFeed";

import { Button } from "@/components/atoms/Button";
import { Mv } from "@/components/atoms/Mv";
import { Spacer } from "@/components/atoms/Spacer";
import { Title } from "@/components/atoms/Title";
import { TagList } from "@/components/molecules/TagList";
import { Skills } from "@/data/Skills";
import { ZennItem } from "@/types/api";

type TopProps = {
  blogList: ZennItem[];
};

export const Top = ({ blogList }: TopProps) => {
  return (
    <main className="pb-100 pt-120 sp:pb-50 sp:pt-70">
      <Mv />
      <section className="mx-auto mt-30 flex max-w-[1000px] flex-col items-center px-20 text-center sp:text-left">
        <Title>
          <AccountCircleIcon sx={{ fontSize: 26 }} />
          <span>About</span>
        </Title>
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
          趣味はプロ野球観戦。好きな球団は北海道日本ハムファイターズ。
          <br className="sp:hidden" />
          休日は友人とチャットを繋げながらもくもく作業したり、
          <br className="sp:hidden" />
          美味しいごはんを食べに行くのが好きです。
          <br />
          <a
            className="text-[#0f83fd] hover:underline"
            href="https://note.com/otonofrontend/n/n95f34ca56193"
            target="_blank"
            rel="noopener noreferrer"
          >
            愛用品リストはこちら
          </a>
        </p>
        <Spacer size="lg" />
        <section className="flex flex-col items-center gap-20">
          <Title>
            <HandymanIcon sx={{ fontSize: 26 }} />
            <span>Skills</span>
          </Title>
          <TagList data={Skills} />
        </section>
        <Spacer size="lg" />
        <section className="flex flex-col items-center gap-20">
          <Title>
            <EmailIcon sx={{ fontSize: 26 }} />
            <span>Contact</span>
          </Title>
          <p className="leading-lg">
            仕事の依頼等、何かありましたら気軽にお問い合わせください。
          </p>
          <Button href="https://docs.google.com/forms/d/18JeZHlJaTIUSL1EAYyj-deiDUZyunvoxNB09m-IPDFw/viewform?edit_requested=true">
            お問い合わせ
          </Button>
        </section>
        {blogList.length > 0 && (
          <>
            <Spacer size="lg" />
            <section className="flex flex-col items-center gap-20">
              <Title>
                <RssFeedIcon sx={{ fontSize: 26 }} />
                <span>Blog</span>
              </Title>
              <ul className="grid gap-14 text-[#0f83fd]">
                {blogList
                  .filter((item) => item.liked_count > 80)
                  .map((item, index) => (
                    <li key={index}>
                      <a
                        href={`https://zenn.dev/${item.path}`}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </section>
          </>
        )}
      </section>
    </main>
  );
};
