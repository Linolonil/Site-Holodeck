import { motion } from "framer-motion";
import PropTypes from "prop-types";
import imgDefault from "../../../assets/logo-sem-fundo.png";

const defaultImage = imgDefault;

const ArticleCardSection = ({ i, el }) => (
  <motion.div
    key={i}
    exit={{ opacity: 0, y: 20 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative overflow-hidden h-[350px] "
  >
    <a
      href={el.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full hover:text-[#8419c5]"
    >
      <div className="h-48 w-full relative overflow-hidden shadow mb-3 flex justify-center items-center">
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%)",
          }}
        ></div>
        <img
          src={el.image || defaultImage}
          alt="Article Image"
          className="object-cover w-full h-full rounded-[4px]"
        />
        <div className="absolute z-10 left-2 bottom-2 inline-block w-max border bg-[rgb(60_41_122)] px-2 py-1 border-[rgb(60_41_122)] rounded-sm">
          <p className="text-sm font-bold text-gray-200 capitalize">{el.theme}</p>
        </div>
      </div>
      <div className="h-[108px] w-full flex flex-col justify-start items-start p-2">
        <h2 className=" text-gray-800 font-semibold font-mono  sm:text-xl md:text-xl  text-start  ">{el.title}</h2>
        <div className="mt-2 text-gray-500 text-sm">
          <time dateTime={el.date_create}>Ontem às 16H50</time>
          {" "}{el.author}
        </div>
      </div>
    </a>
  </motion.div>
);

function ArticlesSection({ articles, loading, error }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-2 bg-transparent">
      {loading && (
        <div className="col-span-full flex items-center justify-center my-2">
          <div className="flex gap-2">
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
          <ArticleCardSection key={i} el={el} i={i} />
        ))}
    </div>
  );
}

ArticlesSection.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      image: PropTypes.string,
      description: PropTypes.string.isRequired,
      theme: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date_create: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

ArticleCardSection.propTypes = {
  i: PropTypes.number.isRequired,
  el: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    date_create: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticlesSection;
