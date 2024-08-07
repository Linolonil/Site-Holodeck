import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import articleRoutes from './routes/articleRoutes.js';
import swaggerUi from 'swagger-ui-express';
import specs from './swaggerOption.js';




dotenv.config(); // Carrega variáveis de ambiente

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());


// rota para acessar api com swagger 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes com prefixo /api
app.use('/api/articles', articleRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
