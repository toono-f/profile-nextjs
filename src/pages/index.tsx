import { BasicLayout } from "@/components/layouts/BasicLayout";
import { Top } from "@/components/templates/Top";
import { client } from "@/lib/client";
import { NextPageWithLayout } from "@/lib/next/types";
import { BlogListType } from "@/types/api";
import { GetStaticProps } from "next";

type PageProps = {
  contents: BlogListType;
};

export const getStaticProps: GetStaticProps = async () => {
  const data: PageProps = await client.get({ endpoint: "blogs" });
  return {
    props: {
      contents: data.contents,
    },
  };
};

const Page: NextPageWithLayout<PageProps> = ({ contents }) => {
  return <Top blogList={contents} />;
};

Page.getLayout = BasicLayout;

export default Page;
