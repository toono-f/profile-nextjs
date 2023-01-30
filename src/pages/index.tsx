import { GetServerSideProps } from "next";

import { BasicLayout } from "@/components/layouts/BasicLayout";
import { Top } from "@/components/templates/Top";
import { NextPageWithLayout } from "@/lib/next/types";
import { ZennItem } from "@/types/api";
// import dayjs from "@/lib/dayjs"; // 検証用

type PageProps = {
  contents: ZennItem[];
  // 以下検証用
  // day: string;
  // day02: string;
};

// microCMS用
// export const getStaticProps: GetStaticProps = async () => {
//   const data: PageProps = await client.get({ endpoint: "blogs" });
//   return {
//     props: {
//       contents: data.contents,
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps = async () => {
  // 以下検証用
  // const day = dayjs().format();
  // const day02 = dayjs().tz().format();

  const res = await fetch("https://zenn.dev/api/articles?username=toono_f");
  const result = await res.json();

  return {
    props: {
      contents: result.articles,
    },
  };
};

const Page: NextPageWithLayout<PageProps> = ({ contents }) => {
  return <Top blogList={contents} />;
};

Page.getLayout = BasicLayout;

export default Page;
