import React, { useEffect, useState, useContext } from "react";
import { Container, Grid, Input } from "@mui/material";
import { MUIWrapperContext } from "../Wrapper";
import ArticlesSearchResult from "./SearchResult";
import useDebounce from "../utils/useDebounce";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

const searchArticle = (q: string = "", lang: string = "en") => {
  return fetch(
    `http://localhost:8000/api/news/get-news/?q=${q}&language=${lang}`
  ).then((response) => response.json());
};

function Articles() {
  const { locale } = useContext(MUIWrapperContext);
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("");
  const debounedSearchValue = useDebounce(searchValue, 300);

  const { isLoading, isError, isSuccess, data } = useQuery(
    ["searchArticle", debounedSearchValue],
    () => searchArticle(debounedSearchValue, locale.lang),
    {
      enabled: debounedSearchValue.length > 0,
    }
  );

  const renderResult = () => {
    if (isLoading) {
      return <div className="search-message"> {t("loading")}</div>;
    }

    if (isError) {
      return (
        <div className="center">
          {t("notFound")}{" "}
          <span role="img" aria-label="sad">
            😢
          </span>
        </div>
      );
    }
    if (isSuccess) {
      return <ArticlesSearchResult articles={data.articles} />;
    }

    return <></>;
  };

  useEffect(() => {}, []);
  return (
    <Container className="p-9">
      <Grid container spacing={2}>
        <Input
          fullWidth
          type="text"
          onChange={({ target: { value } }) => setSearchValue(value)}
          value={searchValue}
          placeholder={t("searchArticles")}
        />
        {renderResult()}
      </Grid>
    </Container>
  );
}

export default Articles;
