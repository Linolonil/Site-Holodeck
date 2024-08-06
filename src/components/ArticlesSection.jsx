import { motion } from "framer-motion";
import useFetchArticle from "./Hooks/useFetchArticles";

function Articles() {
    const { articles, loading, error } = useFetchArticle(true);

  return (
    <>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {loading && (
        <div className="col-span-full flex items-center justify-center mb-2">
        <p className="text-xl font-semibold text-gray-800">
          Carregando Artigos...
        </p>
      </div>
    )}
    {error && <p>{error}</p>}
    {!loading &&
      !error &&
      articles.map((el, i) => (
          <motion.div
          key={i}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
          <img
            src={el.image}
            alt={`Artigo ${i + 1}`}
            className="w-full h-48 object-cover"
            />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {el.title}
            </h4>
            <p className="text-gray-700 mb-4">{el.description}</p>
            <a
              href={el.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8419c5] hover:underline inline-block"
              >
              Saiba mais
            </a>
          </div>
        </motion.div>
      ))}
  </div>
      </>
  )
}

export default Articles