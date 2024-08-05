// src/pages/blog.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Blog = () => {
  return (
    <div className="min-h-screen bg-transparent">

      {/* Seção de Destaque */}
      <section className="container mx-auto my-12 px-6">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="src/assets/info-tech.png"
            alt="Artigo Destaque"
            className="w-full lg:w-1/2 h-auto object-cover"
          />
          <div className="p-8 lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              O Futuro da tecnologia: A Geração de comunidades
            </h2>
            <p className="text-gray-700 mb-6">
            medida que a tecnologia continua a evoluir a um ritmo acelerado, um dos fenômenos mais marcantes é a crescente importância das comunidades na configuração do futuro digital.            </p>
            <button className="self-start bg-[#606060] text-white py-2 px-6 rounded-full hover:bg-[#7328a9] transition-colors duration-300">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Seção de Artigos Recentes */}
      <section className="container mx-auto px-6 my-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Latest Articles</h3>

        {/* Filtros/Categorias */}
        <div className="flex flex-wrap items-center mb-8 space-x-4 space-y-2">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
            Technology
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
            Digital Marketing
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
            Business
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
            More
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#8419c5]"
          />
        </div>

        {/* Lista de Artigos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Artigo 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://via.placeholder.com/400"
              alt="Artigo 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Content Marketing Strategies for 2024
              </h4>
              <p className="text-gray-700 mb-4">
                Learn the best practices for crafting content marketing strategies that will stand out in 2024.
              </p>
              <button className="text-[#8419c5] hover:underline">
                Read more
              </button>
            </div>
          </motion.div>

          {/* Artigo 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://via.placeholder.com/400"
              alt="Artigo 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Social Media Marketing: 5 New Trends to Follow
              </h4>
              <p className="text-gray-700 mb-4">
                Discover the latest trends in social media marketing that are shaping the industry.
              </p>
              <button className="text-[#8419c5] hover:underline">
                Read more
              </button>
            </div>
          </motion.div>

          {/* Artigo 3 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://via.placeholder.com/400"
              alt="Artigo 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Data Privacy and Ethics in the Digital Age
              </h4>
              <p className="text-gray-700 mb-4">
                Explore the challenges and solutions surrounding data privacy in today's digital landscape.
              </p>
              <button className="text-[#8419c5] hover:underline">
                Read more
              </button>
            </div>
          </motion.div>

          {/* Artigo 4 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://via.placeholder.com/400"
              alt="Artigo 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Artificial Intelligence: A Beginner's Guide
              </h4>
              <p className="text-gray-700 mb-4">
                An introduction to artificial intelligence and how it's impacting various industries.
              </p>
              <button className="text-[#8419c5] hover:underline">
                Read more
              </button>
            </div>
          </motion.div>

          {/* Artigo 5 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://via.placeholder.com/400"
              alt="Artigo 5"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                How Blockchain is Changing the Finance Industry
              </h4>
              <p className="text-gray-700 mb-4">
                Understand the role of blockchain technology in revolutionizing the finance sector.
              </p>
              <button className="text-[#8419c5] hover:underline">
                Read more
              </button>
            </div>
          </motion.div>

          {/* Artigo 6 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://via.placeholder.com/400"
              alt="Artigo 6"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Robotics: The Future of Automation
              </h4>
              <p className="text-gray-700 mb-4">
                Discover how robotics is paving the way for new levels of automation across industries.
              </p>
              <button className="text-[#8419c5] hover:underline">
                Read more
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
