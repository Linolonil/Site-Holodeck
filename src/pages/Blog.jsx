import { useEffect, useState } from "react";
import ArticleMain from "../components/Layout/Blog/ArticleMain.jsx";
import ArticlesSection from "../components/Layout/Blog/ArticlesSection.jsx";
import FilterSection from "../components/Layout/Blog/FilterSection.jsx";
import axios from "axios";


// esse cache salva muito, pois reduz o numero de req do backend (temporario)
const cache = {}; 


const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("news");


  useEffect(() => {
    if (category) {
      if (cache[category]) {
        setArticles(cache[category]);
        setLoading(false);
      } else {
        setLoading(true);
        axios
          .get(`http://localhost:5001/api/articles/category/${category}`)
          .then((response) => {
            setArticles(response.data);
            cache[category] = response.data; // Armazena a resposta no cache
            setLoading(false);
          })
          .catch((error) => {
            setError("Erro ao carregar artigos!");
            console.log(error);
            setLoading(false);
          });
      }
    }
  }, [category]);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Seção de Destaque */}
      <ArticleMain />

      {/* Seção de Artigos Recentes */}
      <section className="container mx-auto px-3 lg:px-6  my-12">
        {/* Filtro dos Artigos */}
        <FilterSection setCategory={setCategory}  setError={setError}/>

        {/* Lista de Artigos */}
        <ArticlesSection articles={articles} loading={loading} error={error} />
      </section>
    </div>
  );
};

export default Blog;
