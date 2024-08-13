import { motion } from "framer-motion";
import PropTypes from "prop-types";
import imgDefault from "../../../assets/logo-sem-fundo.png";
function ArticlesSection({ articles, loading, error }) {
  const defaultImage = imgDefault;
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 bg-transparent">
        {loading && (
          <div className="col-span-full flex items-center justify-center my-2">
            <div className="flex flex-row gap-2">
              <div className="w-4 h-4 rounded-full bg-[#8419c5] animate-bounce"></div>
              <div className="w-4 h-4 rounded-full bg-[#8419c5] animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-[#8419c5] animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
        )}
        {error && (
          <div className="col-span-full flex items-center justify-start mb-2">
            <p className="text-xl font-semibold text-gray-800">{error}</p>
          </div>
        )}
        {!loading &&
          !error &&
          articles.map((el, i) => (
            <motion.div
              key={i}
              exit={{ opacity: 0, y: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={el.image || defaultImage}
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
  );
}

ArticlesSection.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      image: PropTypes.string,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default ArticlesSection;
