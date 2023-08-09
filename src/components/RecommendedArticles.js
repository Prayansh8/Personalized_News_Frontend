import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material"; // Make sure to import necessary components from your UI library

// Assuming you have imported the newsData array from "../data/news"
import { newsData } from "../data/news";

const RecommendedArticles = () => {
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }
  function getRandomArticles(count) {
    const randomArticles = [];
    const availableIndices = Array.from(
      { length: newsData.length },
      (_, index) => index
    );

    for (let i = 0; i < count; i++) {
      if (availableIndices.length === 0) {
        break; // No more available articles
      }

      const randomIndex = getRandomIndex(availableIndices.length);
      const selectedIndex = availableIndices.splice(randomIndex, 1)[0];
      randomArticles.push(newsData[selectedIndex]);
    }

    return randomArticles;
  }

  const numberOfRandomArticles = 5;
  const randomArticles = getRandomArticles(numberOfRandomArticles);

  return (
    <div style={{margin:"3vh auto"}}>
      <Grid container spacing={2}>
        {randomArticles.map((article) => (
          <Grid item xs={12} key={article.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {article.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Date: {article.date}
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1rem" }}>
                  {article.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RecommendedArticles;
