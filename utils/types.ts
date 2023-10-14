export type MatterData = {
  title: string;
  [key: string]: any;
};

export type ArticleMetaData = {
  slug: string;
} & MatterData;

export type ArticleData = {
  content: string;
} & MatterData;