import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FilterSection() {
  const [selectedCategory, setSelectedCategory] = useState("technology");
  const [showAllCategories, setShowAllCategories] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const toggleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  const listCategory = [
    { value: "technology" },
    { value: "artificial-intelligence" },
    { value: "cybersecurity" },
    { value: "gadgets" },
    { value: "internet-of-things" },
    { value: "software-development" },
    { value: "mobile-technology" },
    { value: "virtual-reality" },
    { value: "digital-media" },
    { value: "tech-industry-news" },
  ];

  const categoriesToShow = showAllCategories
    ? listCategory
    : listCategory.slice(0, 4);

  const btnMore = (
    <button
      title="Add New"
      className="group cursor-pointer outline-none hover:rotate-90 duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        className="stroke-zinc-400 fill-none group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
      >
        <path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          strokeWidth="1.5"
        ></path>
        <path d="M8 12H16" strokeWidth="1.5"></path>
        <path d="M12 16V8" strokeWidth="1.5"></path>
      </svg>
    </button>
  );

  const btnClose = (
    <button
      title="Add New"
      className="group cursor-pointer outline-none hover:rotate-90 duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        className="stroke-zinc-400 fill-none group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
      >
        <path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          strokeWidth="1.5"
        ></path>
        <path d="M8 12H16" strokeWidth="1.5"></path>
      </svg>
    </button>
  );

  return (
    <>
      <div className="flex items-center justify-between bg-transparent">
        <motion.h3
          exit={{ opacity: 0, scale: 0.9 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-gray-800 mb-6"
        >
          Latest Articles
        </motion.h3>

        <motion.div
          exit={{ opacity: 0, scale: 0.9 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4"
        >
          <button className="" onClick={toggleShowAllCategories}>
            {showAllCategories ? btnClose : btnMore}
          </button>
        </motion.div>
      </div>

      <motion.div
        className="relative flex flex-col items-center mb-8 bg-transparent overflow-hidden"
        layout
      >
        <div className="flex flex-wrap items-start gap-2 p-2 w-full h- border-blue-400 border-b">
          <AnimatePresence>
            {categoriesToShow.map((el) => (
              <motion.div
                key={el.value}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                layout
                className="flex-shrink-0"
              >
                <button
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 first-letter:uppercase"
                  onClick={() => handleCategoryChange(el.value)}
                >
                  <p className="first-letter:uppercase">
                    {el.value.replace("-", " ")}
                  </p>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}

export default FilterSection;
