import { BasicLayout } from "@/components/layouts/BasicLayout";
import { BlogDetail } from "@/components/templates/BlogDetail";
import { client } from "@/lib/client";
import { NextPageWithLayout } from "@/lib/next/types";
import { BlogType } from "@/types/api";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (content) => {
  const id = content.query.id;
  const idExceptArray = Array.isArray(id) ? id[0] : id;
  const data = await client.get({
    endpoint: "blogs",
    contentId: idExceptArray,
  });

  return {
    props: {
      blog: data,
    },
  };
};

type PageProps = {
  blog: BlogType;
};

const Page: NextPageWithLayout<PageProps> = ({ blog }) => {
  return <BlogDetail blog={blog} />;
};

Page.getLayout = BasicLayout;

export default Page;
