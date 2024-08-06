import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Configuração da URL base com a chave da API
const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
const BASE_URL = 'https://gnews.io/api/v4/top-headlines';

// Função para buscar notícias de por categoria
const getArticlesByCategories = async (req, res) => {
  const { categories } = req.params;
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        category: categories,
        lang: "pt",
        apikey: GNEWS_API_KEY
      }
    });
    res.json(response.data.articles);
  } catch (error) {
    console.error('Error fetching articles:', error.message);
    res.status(500).send('Error fetching articles');
  }
};

export default { getArticlesByCategories};
