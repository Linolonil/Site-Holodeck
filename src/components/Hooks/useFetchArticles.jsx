import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchArticle = (category) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/articles/category/${category}`);
        
        setArticles(response.data);
      } catch (error) {
        setError("Erro ao carregar artigos!");
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchArticles();
    }
  }, [category]);

  return { articles, loading, error };
};

export default useFetchArticle;
