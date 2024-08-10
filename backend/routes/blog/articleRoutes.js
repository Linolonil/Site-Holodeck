/**
 * @swagger
 * /api/articles/category/{category}:
 *   get:
 *     summary: Busca artigos da NYTimes por categoria
 *     parameters:
 *       - name: category
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Categoria dos artigos a serem buscados
 *     responses:
 *       200:
 *         description: Lista de artigos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                     description: Título do artigo
 *                   url:
 *                     type: string
 *                     description: URL do artigo
 *                   image:
 *                     type: string
 *                     description: URL da imagem do artigo
 *                     nullable: true
 *                   description:
 *                     type: string
 *                     description: Descrição ou resumo do artigo
 *       500:
 *         description: Erro interno do servidor
 */


import express from 'express';
import articleController from '../../controllers/blog/articleController.js'; 

const router = express.Router();

// Rota para buscar notícias por categoria
router.get('/category/:category', articleController.getArticlesByCategories);

export default router;
