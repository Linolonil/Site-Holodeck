// src/pages/blog.jsx
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from "react";
import ArticleMain from "../components/ArticleMain.jsx";
import ArticlesSection from "../components/ArticlesSection.jsx";
import FilterSection from "../components/FilterSection.jsx";

const Blog = () => {

  const [selectedCategory, setSelectedCategory] = useState('');


  return (
    <div className="min-h-screen bg-transparent">
      {/* Seção de Destaque */}
      <ArticleMain/>

      {/* Seção de Artigos Recentes */}
      <section className="container mx-auto px-6 my-12">
       

        {/*Filtro dos Artigos*/}
        <FilterSection />

        {/* Lista de Artigos */}
        <ArticlesSection />
      </section>
    </div>
  );
};

export default Blog;
