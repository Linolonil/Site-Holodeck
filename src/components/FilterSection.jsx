
function FilterSection() {
  return (
  <>
   <div className="flex flex-wrap items-center mb-8 space-x-4 space-y-2">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
          Technologia
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
          Marketing Digital
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
  </>
  )
}

export default FilterSection