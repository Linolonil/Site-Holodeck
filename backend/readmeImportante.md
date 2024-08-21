/
├── config/
│   ├── db.js            # Configuração do banco de dados
│   ├── server.js        # Configuração do servidor
│   └── environment.js   # Variáveis de ambiente e configurações globais
│
├── controllers/
│   ├── authController.js   # Lógica de autenticação (login, register)
│   ├── projectController.js # Lógica para feed de projetos
│   ├── shopController.js    # Lógica para loja (shop-store)
│   ├── contactController.js # Lógica para página de contato
│   ├── blogController.js    # Lógica para blog
│   └── baseController.js    # Controlador base (comuns a todas as páginas)
│
├── models/
│   ├── User.js           # Modelo de usuário
│   ├── Project.js        # Modelo de projeto
│   ├── Product.js        # Modelo de produto (loja)
│   ├── ContactMessage.js # Modelo para mensagens de contato
│   └── BlogPost.js       # Modelo para postagens de blog
│
├── routes/
│   ├── authRoutes.js     # Rotas de autenticação
│   ├── projectRoutes.js  # Rotas para feed de projetos
│   ├── shopRoutes.js     # Rotas para loja
│   ├── contactRoutes.js  # Rotas para página de contato
│   ├── blogRoutes.js     # Rotas para blog
│   └── index.js          # Arquivo que combina todas as rotas
│
├── middlewares/
│   ├── authMiddleware.js  # Middleware de autenticação
│   ├── errorHandler.js    # Middleware de tratamento de erros
│   ├── validation.js      # Middleware para validação de dados
│   └── logger.js          # Middleware de logging
│
├── services/
│   ├── authService.js     # Serviço de autenticação
│   ├── projectService.js  # Serviço para feed de projetos
│   ├── shopService.js     # Serviço para loja
│   ├── contactService.js  # Serviço para mensagens de contato
│   └── blogService.js     # Serviço para blog
│
├── utils/
│   ├── helpers.js        # Funções auxiliares
│   └── constants.js      # Constantes do projeto
│
├── views/
│   ├── layouts/          # Layouts gerais (e.g., header, footer)
│   ├── login.ejs         # Página de login
│   ├── register.ejs      # Página de registro
│   ├── projects-feed.ejs # Página de feed de projetos
│   ├── shop-store.ejs    # Página da loja
│   ├── contact.ejs       # Página de contato
│   └── blog.ejs          # Página de blog
│
├── .env                 # Variáveis de ambiente
├── app.js               # Arquivo principal do servidor
├── package.json         # Dependências e scripts do projeto
└── README.md            # Documentação do projeto


Descrição das Pastas
config/: Arquivos de configuração, como banco de dados, servidor e variáveis de ambiente.
controllers/: Controladores que lidam com as operações de cada rota.
models/: Modelos do banco de dados que representam as entidades principais (usuários, projetos, produtos, etc.).
routes/: Arquivos de rotas que mapeiam URLs para controladores específicos.
middlewares/: Middlewares para manipulação de autenticação, erros, validação, e logging.
services/: Serviços que contêm a lógica de negócio principal, separada dos controladores.
utils/: Funções utilitárias e constantes globais.
views/: Templates de visualização para renderizar as páginas da aplicação.