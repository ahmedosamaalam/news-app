export interface IArticles {
  status: string;
  totalResults: number;
  articles: IArticle[];
}
export interface INewsSource {
  id: string | null;
  name: string;
}

export interface IArticle {
  source: INewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
