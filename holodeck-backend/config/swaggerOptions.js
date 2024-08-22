import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Article Search API',
      version: '1.0.0',
      description: 'API para buscar artigos .',
    },
  },
  apis: ['./routes/*.js'], // Caminho para os arquivos que contêm as rotas e comentários JSDoc
  components: {
    schemas: {
      Article: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            example: 'Exemplo de Título',
          },
          url: {
            type: 'string',
            example: 'https://example.com/artigo',
          },
          image: {
            type: 'string',
            nullable: true,
            example: 'https://example.com/imagem.jpg',
          },
          description: {
            type: 'string',
            example: 'Descrição curta do artigo.',
          },
        },
      },
    },
  },
};
  const specs = swaggerJsdoc(options);
  export default specs