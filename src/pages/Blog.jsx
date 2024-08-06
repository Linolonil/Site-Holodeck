// src/pages/blog.jsx
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from "react";
import ArticleMain from "../components/ArticleMain.jsx";
import ArticlesSection from "../components/ArticlesSection.jsx";
import FilterSection from "../components/FilterSection.jsx";

const Blog = () => {

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Seção de Destaque */}
      <ArticleMain/>

      {/* Seção de Artigos Recentes */}
      <section className="container mx-auto px-6 my-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">
          Latest Articles
        </h3>

        {/*Filtro dos Artigos*/}
        <FilterSection onCategoryChange={handleCategoryChange}/>

        {/* Lista de Artigos */}
        <ArticlesSection category={selectedCategory}/>
      </section>
    </div>
  );
};

export default Blog;
