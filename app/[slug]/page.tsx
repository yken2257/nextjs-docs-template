// @ts-ignore
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getArticleData, getAllArticleSlug } from "@/utils/parse-post";
import { ArticleData } from "@/utils/types";


export async function generateStaticParams() {
  const paths = getAllArticleSlug();
  return paths
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const articleData: ArticleData = await getArticleData(slug);

  return (
    <>
      <h1>
        {articleData.title}
      </h1>
      <MDXRemote source={articleData.content} />
    </>
  );
}