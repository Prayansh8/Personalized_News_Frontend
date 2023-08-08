import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { getSavedArticles } from "../utils/api";
import { toast } from "react-toastify";

function SavedArticles() {
  const [savedArticles, setSavedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSavedArticles() {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        if (token) {
          const response = await getSavedArticles(token);
          setSavedArticles(response);
          setLoading(false);
        } else {
          toast.error("User not authenticated");
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchSavedArticles();
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: "40px" }}>
      <Typography variant="h4">Saved Articles</Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Grid container spacing={2}>
          {savedArticles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="card">
                <CardContent>
                  <Typography variant="h6" className="card-title">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" className="card-description">
                    {article.description}
                  </Typography>
                  <Button variant="outlined" className="save-button">
                    Remove Article
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default SavedArticles;
