import React, { useEffect, useState } from "react";
import { getSavedArticles } from "../utils/api";
import { toast } from "react-toastify";
import { newsData } from "../data/news";
import {
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const ShowSavedArticles = () => {
  const [savedArticles, setSavedArticles] = useState([]);
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    async function fetchSavedArticles() {
      try {
        const token = localStorage.getItem("token_news");
        if (!token) {
          toast.error("user not login!");
        }
        const articles = await getSavedArticles(token);
        setSavedArticles(articles);
      } catch (error) {
        console.error("Error fetching saved articles", error);
      }
    }

    fetchSavedArticles();
  }, []);

  useEffect(() => {
    // Map savedArticles to matching newsData and update articleData state
    const matchingNewsData = savedArticles.map((article) => {
      const matchingNews = newsData.find(
        (news) => news.id === parseInt(article.ArticleId)
      );
      return matchingNews || null;
    });

    setArticleData(matchingNewsData);
  }, [savedArticles]);

  return (
    <>
      <div style={{margin: "2vh auto"}}>
        <h1>Saved Articles</h1>
        {articleData.length > 0 ? (
          <Grid container spacing={3}>
            {articleData.map(({ id, title, description, date, content }) => (
              <Grid item xs={12} key={id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      gutterBottom
                    >
                      {description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Date: {date}
                    </Typography>
                    <Typography variant="body1" style={{ marginTop: "1rem" }}>
                      {content}
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <p>No matching articles found.</p>
        )}
      </div>
    </>
  );
};

export default ShowSavedArticles;
