# Holodeck Site

Este é o repositório do site da comunidade Holodeck Tecnologia, desenvolvido usando **React** e **JavaScript** com **Vite**. O site possui várias páginas que mostram informações sobre a comunidade, eventos, projetos, e uma loja online.

## Estrutura do Projeto
A estrutura do projeto é organizada de forma modular, com componentes reutilizáveis e páginas dedicadas para diferentes seções do site.

```bash
.
holodeck-site/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── assets/                  # Imagens e arquivos estáticos
  │   ├── components/              # Componentes reutilizáveis
  │   │   ├── Layout/              # Componentes de layout como Header, Footer, etc.
  │   │   ├── Home/                # Componentes específicos para a Home
  │   │   ├── Contact/             # Componentes para a página de Contato
  │   │   ├── CommunityJoin/       # Componentes para Entrar na Comunidade
  │   │   ├── Collaborator/        # Componentes para Ser um Colaborador
  │   │   ├── Projects/            # Componentes para Projetos
  │   │   ├── Events/              # Componentes para Eventos
  │   │   ├── Store/               # Componentes para a Loja
  │   │   └── Blog/                # Componentes para o Blog (opcional)
  │   ├── hooks/                   # Custom React hooks
  │   ├── pages/                   # Páginas principais
  │   │   ├── Home.jsx             # Página Home
  │   │   ├── Contact.jsx          # Página Contato
  │   │   ├── CommunityJoin.jsx    # Página Entrar na Comunidade
  │   │   ├── Collaborator.jsx     # Página Ser um Colaborador
  │   │   ├── Projects.jsx         # Página Projetos Já Desenvolvidos
  │   │   ├── Events.jsx           # Página Eventos
  │   │   ├── Store.jsx            # Página Loja
  │   │   └── Blog.jsx             # Página Blog (opcional)
  │   ├── styles/                  # Arquivos de estilo (CSS, Tailwind)
  │   ├── utils/                   # Funções utilitárias
  │   ├── App.jsx                  # Componente raiz
  │   ├── main.jsx                 # Entrada do aplicativo
  │   └── router.jsx               # Configuração de rotas
  ├── package.json
  └── tailwind.config.js
```
## Tecnologias Utilizadas

- <a href="https://reactjs.org/" target="_blank">React: Biblioteca para construção da interface do usuário.</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript: Linguagem de programação utilizada para o desenvolvimento do projeto.</a>
- <a href="https://vitejs.dev/" target="_blank">Vite: Ferramenta de build para desenvolvimento rápido e leve.</a>
- <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a>

## Configuração e Execução do Projeto
Para configurar e executar o projeto localmente, siga os passos abaixo:

## Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados em sua máquina.

[node.js](https://nodejs.org/pt)
[npm](https://www.npmjs.com/)

## Instalação
1. Clone o repositório:
```bash
. git clone https://github.com/usuario/holodeck-site.git
```
2. Navegue até o diretório do projeto:
```bash
. cd holodeck-site
```
3. Instale as dependências do projeto:
```bash
. npm install
```
### Executando o Projeto
Para executar o projeto localmente, use o seguinte comando:

> npm run dev
O aplicativo estará disponível em http://localhost:5173.

### Build para Produção
Para gerar uma build para produção, utilize o comando:

> npm run build
Os arquivos de build serão gerados na pasta dist.

## Estrutura das Páginas
O site possui as seguintes páginas:

- Home: Página inicial com informações gerais sobre a comunidade.
- Contact: Página de contato para comunicação com a equipe.
- Community Join: Página para se tornar membro da comunidade.
- Collaborator: Página para interessados em colaborar com a comunidade.
- Projects: Página exibindo os projetos desenvolvidos pela comunidade.
- Events: Página com informações sobre eventos futuros e passados.
- Store: Loja online para produtos relacionados à comunidade.
- Blog (Opcional): Página para postagens de blog e atualizações.

## Contribuição
Se você deseja contribuir para o desenvolvimento deste projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie um branch com a sua feature (git checkout -b minha-feature).
3. Commit suas mudanças (git commit -m 'Minha nova feature').
4. Push para o branch (git push origin minha-feature).
5. Abra um Pull Request.
6. Licença
Este projeto está licenciado sob a [MIT License](LICENSE).
