import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { IArticle } from "../interfaces/NewsInterfaces";

interface NewsCardProps {
  article: IArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const { t } = useTranslation();
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = event.target as HTMLImageElement;
    target.src = "https://via.placeholder.com/150";
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={article.urlToImage}
        title={article.title}
        onError={handleImageError}
      />
      <CardContent>
        <Typography
          className="text-3xl font-bold underline"
          gutterBottom
          variant="h5"
          component="div"
        >
          {t(article.title)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t(article.description)}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={article.url} target="_blank">
          <Button size="small">Details</Button>
        </a>
      </CardActions>
    </Card>
  );
};
export default NewsCard;
