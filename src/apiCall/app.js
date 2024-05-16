import axios from "axios";

export const fetchNews = async () => {
  try {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
};
