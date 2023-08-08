import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:5000"; // Update with your backend URL

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logoutUser = async () => {
  try {
    localStorage.removeItem("token_news");

    const token = localStorage.getItem("token_news");
    if (!token) {
      toast.success("Logout User");
    }
  } catch (error) {
    throw error.response.data;
  }
};

export const saveArticle = async (articleId, token) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/articles/save-article`,
      { articleId },
      { headers: { Authorization: token } }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getSavedArticles = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/articles/saved-articles`, {
      headers: { Authorization: token },
    });
    return response.data.savedArticles;
  } catch (error) {
    throw error.response.data;
  }
};

export const getRecommendedArticles = async (token) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/articles/recommended-articles`,
      {
        headers: { Authorization: token },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchNewsFeed = async (interests) => {
  try {
    const response = await axios.get(`${BASE_URL}/articles/news-feed`, {
      params: {
        interests: interests,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
