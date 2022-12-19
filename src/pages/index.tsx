import { BasicLayout } from "@/components/layouts/BasicLayout";
import { Top } from "@/components/templates/Top";
import { client } from "@/lib/client";
import { NextPageWithLayout } from "@/lib/next/types";
import { BlogListType } from "@/types/api";
import { GetServerSideProps } from "next";
import dayjs from "@/lib/dayjs";

type PageProps = {
  contents: BlogListType;
  day: string;
  day02: string;
};

// export const getStaticProps: GetStaticProps = async () => {
//   const data: PageProps = await client.get({ endpoint: "blogs" });
//   return {
//     props: {
//       contents: data.contents,
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps = async () => {
  const data: PageProps = await client.get({ endpoint: "blogs" });
  const day = dayjs().format();
  const day02 = dayjs().tz().format();

  return {
    props: {
      contents: data.contents,
      day: day,
      day02: day02,
    },
  };
};

const Page: NextPageWithLayout<PageProps> = ({ contents, day, day02 }) => {
  return <Top blogList={contents} day={day} day={day02} />;
};

Page.getLayout = BasicLayout;

export default Page;
