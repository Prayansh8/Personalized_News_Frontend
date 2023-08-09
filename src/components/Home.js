import React, { useState } from "react";
import { newsData } from "../data/news";
import { Container, Grid, FormControl, Select, MenuItem } from "@mui/material";
import NewsCard from "./NewsCard";
import "./HomeStyles.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default to "all" category

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredNewsData =
    selectedCategory === "all"
      ? newsData
      : newsData.filter((item) => item.category === selectedCategory);

  return (
    <Container maxWidth="md" style={{margin: "3vh auto"}}>
      <FormControl sx={{ marginY: 4 }}>
        <label>Choose Your Interest:</label>
        <Select value={selectedCategory} onChange={handleChange}>
          <MenuItem value="all">All Categories</MenuItem>
          <MenuItem value="Politics">Politics</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
          <MenuItem value="Technology">Technology</MenuItem>
          <MenuItem value="Health">Health</MenuItem>
          {/* Add more categories as needed */}
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {filteredNewsData.map(({ id, title, description, date, content }) => (
          <Grid item xs={12} key={id}>
            <NewsCard
              id={id}
              title={title}
              description={description}
              date={date}
              content={content}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
