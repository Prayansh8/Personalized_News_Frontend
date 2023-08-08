// NewsCard.js

import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { saveArticle } from "../utils/api";
import { toast } from "react-toastify";
import "./NewsCardStyles.css"

const NewsCard = ({ id, title, description, date, content }) => {
  const handleSaveArticle = () => {
    const token = localStorage.getItem("token_news");
    if (!token) {
      toast.error("user not login!");
    } else {
      saveArticle(id, token);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Date: {date}
        </Typography>
        <Typography variant="body1" style={{ marginTop: "1rem" }}>
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleSaveArticle} variant="outlined" color="primary">
          Save Article
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
