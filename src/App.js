import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ShowSavedArticles from "./components/ShowSavedArticles";
import RecommendedArticles from "./components/RecommendedArticles";

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <div style={{ width: "70%", margin:"auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/saved-articles" element={<ShowSavedArticles />} />
            <Route
              path="/recommended-articles"
              element={<RecommendedArticles />}
            />
          </Routes>
        </div>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
