import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Configuração da URL base com a chave da API
const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

// Função para buscar artigos por categoria
const getArticlesByCategories = async (req, res) => {
  const { category } = req.params;

  // Validação da categoria
  if (!category || typeof category !== 'string') {
    return res.status(400).json({ error: 'Categoria inválida.' });
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        sort: 'newest',
        q: category, // Palavra-chave para busca
        'api-key': API_KEY
      }
    });

    // Extraindo dados necessários
    const articles = response.data.response.docs.map(article => {
      const multimedia = article.multimedia || [];
      const imageUrl = multimedia.length > 0 ? `https://static01.nyt.com/${multimedia[0].url}` : null;

      return {
        title: article.headline?.main || 'Sem título',
        url: article.web_url || 'URL não disponível',
        image: imageUrl,
        description: article.abstract || 'Descrição não disponível'
      };
    });

    res.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error.message);
    // Verificação se o erro é de rede ou da API
    if (error.response) {
      // Erro da API
      res.status(error.response.status).json({ error: error.response.data.message || 'Erro ao buscar artigos.' });
    } else if (error.request) {
      // Erro de rede
      res.status(503).json({ error: 'Erro de rede ao buscar artigos. Tente novamente mais tarde.' });
    } else {
      // Outros erros
      res.status(500).json({ error: 'Erro interno do servidor.' });
    }
  }
};

export default { getArticlesByCategories };
