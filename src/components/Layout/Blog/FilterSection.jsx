import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { btnClose, btnMore, listCategory } from "../../../assets/Blog/assets";

function FilterSection({ setCategory }) {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category) => {
    setCategory(category);
    setSelectedCategory(category);
  };

  const toggleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategories = listCategory.filter((category) =>
    category.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoriesToShow = showAllCategories
    ? filteredCategories
    : filteredCategories.slice(0, 6);

  return (
    <>
      <div className="flex items-center justify-between bg-transparent mb-5">
        <h3 className="text-4xl font-bold text-gray-900 border-b-4 border-[#8419c5] pb-2">
          Latest Articles
        </h3>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search category..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-gray-100 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#8419c5]"
          />
          <button
            key="toggle-button"
            className="flex justify-center group cursor-pointer outline-none hover:rotate-180 duration-300"
            onClick={toggleShowAllCategories}
            title={showAllCategories ? "Show Less" : "Show More"}
          >
            {showAllCategories ? btnClose : btnMore}
          </button>
        </div>
      </div>

      <div className=" h-full flex items-center justify-center mb-8 bg-transparent  ">
        <div className="flex flex-wrap items-center justify-start gap-3 my- w-full   ">
          {categoriesToShow.length > 0 ? (
            categoriesToShow.map((el) => (
              <motion.button
                key={el.value}
                className={`mt-4 inline-block px-4 py-3  font-bold rounded-lg shadow-lg hover:bg-gray-600 transition-colors duration-300 ${selectedCategory === el.value ? "bg-gray-500 text-white" : "bg-[#8319c5da] text-white"}`}
                onClick={() => handleCategoryChange(el.value)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <p className="first-letter:uppercase">
                  {el.value.replace("-", " ")}
                </p>
              </motion.button>
            ))
          ) : (
            <p className="text-gray-500">Category not found</p>
          )}
        </div>
      </div>
    </>
  );
}

FilterSection.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default FilterSection;
