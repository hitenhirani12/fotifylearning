import React from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';

const CategoriesTagsReviews = ({
  activeTab,
  isCategoryDropdownVisible,
  isTagDropdownVisible,
  filteredCategories,
  filteredTags,
  searchTerm,
  tagSearchTerm,
  setSearchTerm,
  setTagSearchTerm,
  categories,
  tags,
  reviews,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <>
      {/* Categories Dropdown */}
      {isCategoryDropdownVisible && activeTab === "categories" && (
        <div className="absolute bg-gray-800 rounded-lg shadow-lg mt-2 py-2 px-4">
          <input
            type="text"
            className="w-full p-2 mb-2 rounded-lg bg-gray-900 text-white"
            placeholder="Search Categories"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className="flex flex-col h-42 overflow-y-auto">
            {filteredCategories.map((cate, index) => (
              <li
                key={index}
                className="py-1 px-2 hover:bg-gray-600 rounded-lg cursor-pointer"
                onClick={() => setActiveCategory(cate.category)}
              >
                <h1 className="flex items-center gap-2">
                  <div className={`${cate.div} h-3 w-3`}></div>
                  {cate.category} x {cate.total}
                </h1>
                <div className="text-gray-500">{cate.message}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags Dropdown */}
      {isTagDropdownVisible && activeTab === "tags" && (
        <div className="absolute bg-gray-700 rounded-lg shadow-lg mt-2 py-2 px-4">
          <input
            type="text"
            className="w-full p-2 mb-2 rounded-lg bg-gray-800 text-white"
            placeholder="Search Tags"
            value={tagSearchTerm}
            onChange={(e) => setTagSearchTerm(e.target.value)}
          />
          <ul className="flex flex-col h-42 overflow-y-auto">
            {filteredTags.map((tag, index) => (
              <li key={index} className="py-1 px-2 hover:bg-gray-600 rounded-lg cursor-pointer">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Reviews Table */}
      {activeCategory && (
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="bg-gray-900">
              <th className="p-2 text-left">Topic</th>
              <th className="p-2">Replies</th>
              <th className="p-2">Views</th>
              <th className="p-2">Activity</th>
            </tr>
          </thead>
          <tbody>
            {reviews[activeCategory]?.map((review, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="p-2">{review.topic}</td>
                <td className="p-2 text-center">{review.replies}</td>
                <td className="p-2 text-center">{review.views}</td>
                <td className="p-2 text-center">{review.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default CategoriesTagsReviews;
