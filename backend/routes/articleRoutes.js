import express from 'express';
import articleController from '../controllers/articleController.js'; // Verifique o caminho correto

const router = express.Router();

// Rota para buscar notícias por categoria
router.get('/categorie/:categorie', articleController.getArticlesByCategories);

export default router;
