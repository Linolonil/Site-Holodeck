// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5001;

// Middleware para permitir requisições CORS
app.use(cors());

// Rota para buscar artigos
app.get('/api/articles', async (req, res) => {
  console.log('Received request for /api/articles'); // Log para depuração
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        category: 'technology',
        apiKey: 'YOUR_NEWS_API_KEY', // Substitua pela sua chave de API
      },
    });
    res.json(response.data.articles);
  } catch (error) {
    console.error('Error fetching articles:', error.message); // Mostrar mensagem de erro
    res.status(500).send('Error fetching articles');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
