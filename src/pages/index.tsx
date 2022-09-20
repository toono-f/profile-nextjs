import { BasicLayout } from "@/components/layouts/BasicLayout";
import { Top } from "@/components/templates/Top";
import { client } from "@/lib/client";
import { NextPageWithLayout } from "@/lib/next/types";
import { BlogListType } from "@/types/api";

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  return {
    props: {
      blogList: data.contents,
    },
  };
};

type PageProps = {
  blogList: BlogListType;
};

const Page: NextPageWithLayout<PageProps> = ({ blogList }) => {
  return <Top blogList={blogList} />;
};

Page.getLayout = BasicLayout;

export default Page;
