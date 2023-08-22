import React, { useEffect, useState, useContext } from "react";
import { Container, Grid, Input } from "@mui/material";
import { MUIWrapperContext } from "../Wrapper";
import useDebounce from "../utils/useDebounce";
import { useQuery } from "react-query";

const searchArticle = (q: string = "", lang: string = "en") => {
  return fetch(
    `http://localhost:8000/api/news/get-news/?q=${q}&language=${lang}`
  ).then((response) => response.json());
};

function Articles() {
  const { locale } = useContext(MUIWrapperContext);
  const [searchValue, setSearchValue] = useState("");
  const debounedSearchValue = useDebounce(searchValue, 300);

  const { isLoading, isError, isSuccess, data } = useQuery(
    ["searchArticle", debounedSearchValue],
    () => searchArticle(debounedSearchValue, locale.lang),
    {
      enabled: debounedSearchValue.length > 0,
    }
  );

  const renderArticlesResult = () => {
    if (isLoading) {
      return <div> Loading... </div>;
    }

    if (isError) {
      return <div className="center">Error</div>;
    }
    if (isSuccess) {
      return <div className="search-message"> Data </div>;
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
          placeholder="Search articles"
        />
        {renderArticlesResult()}
      </Grid>
    </Container>
  );
}

export default Articles;
