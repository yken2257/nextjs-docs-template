import fs from 'fs';
import path from 'path';
// @ts-ignore
import matter from 'gray-matter';
import { MatterData, ArticleMetaData, ArticleData } from './types';

const postsDirectory = path.join(process.cwd(), 'articles');

export async function getArticleData(slug: string): Promise<ArticleData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    content: matterResult.content,
    ...matterResult.data
  };
}

export function getAllArticleSlug() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}