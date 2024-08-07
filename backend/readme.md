# Projeto de Artigos NYTimes

Este projeto é uma aplicação backend que busca artigos da NYTimes por categoria e expõe uma API para acesso a esses dados. A API também está documentada com Swagger.

## Dependências Utilizadas

- `express`: Framework para construção da aplicação web.
- `cors`: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- `dotenv`: Carrega variáveis de ambiente de um arquivo `.env`.
- `axios`: Cliente HTTP para fazer requisições à API da NYTimes.
- `swagger-ui-express`: Middleware para servir a documentação da API com Swagger.

## Configuração e Execução

1. **Instalação das Dependências**

   Navegue até a pasta `/backend` do projeto e execute o comando abaixo para instalar as dependências necessárias:

   ```bash
   cd /backend
   npm install
2. **Configuração das Variáveis de Ambiente**

    Crie um arquivo ".env" na pasta /backend com as seguintes variáveis:

    ***PORT=5001***

    ***API_KEY=your_nytimes_api_key***

    Substitua ***your_nytimes_api_key*** pela sua chave de API da NYTimes.

3. **Execução da Aplicação**

    Após configurar o .env, inicie o servidor de desenvolvimento com:


    ***npm run dev***
    Se tudo estiver correto, você verá a seguinte mensagem no console:


    ***Server running on port 5001 ou 3000***
    (A porta pode ser diferente se você a tiver configurado no arquivo .env).

4. **Acesso à API**

    Após iniciar o servidor, a API estará disponível na URL base ***/api/article/category/:category***. A documentação da API pode ser acessada em ***/api-docs*** com swagger.

5. **Endpoint para buscar artigos por categoria:**

    GET ***/api/articles/category/{category}***

    Parâmetros:

    **category** (string): Categoria dos artigos a serem buscados (ex: technology, sports, science).
    
    **Resposta:**
        
        [

        {

            "title": "Título do artigo",

            "url": "URL do artigo",

            "image": "URL da imagem do artigo",

            "description": "Descrição ou resumo do
            artigo"
        }

        ]

    **Códigos de Status:**

    **200** OK: Lista de artigos encontrados.

    **500** Internal Server Error: Erro interno do servidor.

    **Estrutura do Projeto:**
  - `/backend`: Contém o código do backend da aplicação.
    - `/controllers`: Controladores que definem a lógica de negócios.
    - `/routes`: Rotas da aplicação.
    - `/model`: Contém os códigos do modelo para o banco de dados.
    - `index.js`: Arquivo principal que configura e inicia o servidor Express.
    - `swaggerOption.js`: Configuração do Swagger para documentação da API.
## Stack utilizada


**Back-end:** Node, Express

