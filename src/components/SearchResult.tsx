import { Grid } from "@mui/material";
import * as React from "react";
import { IArticle } from "../interfaces/NewsInterfaces";
import NewsCard from "./Card";
const ArticlesSearchResult = ({ articles }: { articles: IArticle[] }) => {
  return articles?.length > 0 ? (
    <Grid container spacing={2} className="p-4">
      {articles.map((article, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <NewsCard key={index} article={article} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <div className="search-message"> No articles found</div>
  );
};

export default ArticlesSearchResult;
