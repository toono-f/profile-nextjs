import { BasicLayout } from "@/components/layouts/BasicLayout";
import { BlogDetail } from "@/components/templates/BlogDetail";
import { client } from "@/lib/client";
import { NextPageWithLayout } from "@/lib/next/types";
import { BlogListType, BlogType } from "@/types/api";
import { GetStaticPaths, GetStaticProps } from "next";

type dataType = {
  contents: BlogListType;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: dataType = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

type PageProps = {
  data: BlogType;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const idExceptArray = Array.isArray(id) ? id[0] : id;
  const data: PageProps = await client.get({
    endpoint: "blogs",
    contentId: idExceptArray,
  });
  return {
    props: {
      data: data,
    },
  };
};

const Page: NextPageWithLayout<PageProps> = ({ data }) => {
  return <BlogDetail data={data} />;
};

Page.getLayout = BasicLayout;

export default Page;
