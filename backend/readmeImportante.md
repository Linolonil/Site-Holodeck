backend/
│
├── controllers/
│   ├── authController.js        # Lógica para autenticação de usuários
│   ├── articleController.js     # Lógica para manipulação de artigos
│   └── profileController.js     # Lógica para manipulação de perfis (opcional)
│
├── routes/
│   ├── authRoutes.js            # Rotas relacionadas à autenticação
│   ├── articleRoutes.js         # Rotas relacionadas aos artigos
│   └── profileRoutes.js         # Rotas relacionadas aos perfis (opcional)
│
├── middleware/
│   ├── authMiddleware.js        # Middleware para autenticação de usuários
│   └── errorMiddleware.js       # Middleware para tratamento de erros
│
├── models/
│   ├── userModel.js             # Modelo de dados para usuários
│   ├── articleModel.js          # Modelo de dados para artigos
│   └── profileModel.js          # Modelo de dados para perfis (opcional)
│
├── config/
│   ├── dbConfig.js              # Configuração do banco de dados
│   ├── swaggerConfig.js         # Configuração do Swagger
│   └── envConfig.js             # Configuração das variáveis de ambiente
│
├── utils/
│   ├── authUtils.js             # Funções utilitárias para autenticação
│   └── logger.js                # Configuração e funções de logging
│
├── .env                         # Variáveis de ambiente do projeto
├── .gitignore                    # Arquivos e diretórios a serem ignorados pelo Git
├── nodemon.json                 # Configuração do Nodemon
├── package.json                 # Metadados do projeto e dependências
├── package-lock.json            # Snapshot das dependências do projeto
├── README.md                    # Descrição do projeto
└── server.js                    # Ponto de entrada da aplicação
