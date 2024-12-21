import React, { useState } from "react";
import CategoriesTagsReviews from "./CategoriesTagsReviews";
import { CiMenuKebab } from "react-icons/ci";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import { MdOutlineTopic } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidBookmarkAlt, BiSolidRightArrow } from "react-icons/bi";

const Forum = () => {
  const [activeTab, setActiveTab] = useState("latest"); // Default to latest tab
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [isTagDropdownVisible, setIsTagDropdownVisible] = useState(false);
  const [tagSearchTerm, setTagSearchTerm] = useState('');

  const categories = [
    { category: "Career Paths", total: 4, div: 'bg-fuchsia-400', message: "this is very helpful to your job." },
    { category: "Cert Prep", total: 2, div: 'bg-blue-400', message: "this is very helpful to your career." },
    { category: "Stay Ahead", total: 2, div: 'bg-cyan-400', message: "stay updated with industry trends." },
    { category: "Career Advice", total: 3, div: 'bg-red-400', message: "get expert tips and advice." },
    { category: "Industry News", total: 1, div: 'bg-green-400', message: "latest news in the industry." }
  ];

  const tags = ["Learning", "Mentor", "a-plus", "security-plus", "aws-ccp"];

  const reviews = {
    "Career Paths": [
      { topic: "Welcome to Cybrary!", replies: 1, views: "2.5k", activity: "Dec 2023", tags: ["Learning", "Career Paths"] },
      { topic: "Career Path Task 1", replies: 5, views: "1.1k", activity: "Nov 2023", tags: ["Learning", "Career Paths", "security-plus"] },
      { topic: "Career Path Insights", replies: 2, views: "500", activity: "Oct 2023", tags: ["Mentor", "Career Paths"] },
      { topic: "Career Development Tips", replies: 7, views: "3k", activity: "Sep 2023", tags: ["Learning", "Career Advice"] }
    ],
    "Cert Prep": [
      { topic: "Access Control Basics Task 1", replies: 13, views: "399", activity: "6h", tags: ["Cert Prep", "security-plus"] },
      { topic: "Cert Prep Discussion", replies: 8, views: "800", activity: "3h", tags: ["Cert Prep", "aws-ccp"] }
    ],
    "Stay Ahead": [
      { topic: "Industry Trends 2024", replies: 4, views: "200", activity: "Jan 2024", tags: ["Stay Ahead", "Learning", "Tech"] },
      { topic: "Tech Innovations", replies: 10, views: "1k", activity: "Dec 2023", tags: ["Stay Ahead", "Mentor"] }
    ],
    "Career Advice": [
      { topic: "How to Advance in Your Career", replies: 12, views: "1.5k", activity: "Feb 2024", tags: ["Career Advice", "Mentor"] },
      { topic: "Networking Tips", replies: 5, views: "700", activity: "Jan 2024", tags: ["Career Advice", "Learning"] },
      { topic: "Job Search Strategies", replies: 8, views: "400", activity: "Dec 2023", tags: ["Career Advice", "a-plus"] }
    ],
    "Industry News": [
      { topic: "New Security Vulnerability", replies: 2, views: "5k", activity: "Jan 2024", tags: ["Industry News", "security-plus"] }
    ]
  };

  // Filter categories and tags based on search term
  const filteredCategories = categories.filter(cate =>
    cate.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredTags = tags.filter(tag =>
    tag.toLowerCase().includes(tagSearchTerm.toLowerCase())
  );

  // Handle tab clicks
  const handleTabClick = (tab) => {
    if (tab === "categories") {
      setIsCategoryDropdownVisible((prev) => !prev); // Toggle category dropdown visibility
      setIsTagDropdownVisible(false); // Close tags dropdown when categories are clicked
    } else if (tab === "tags") {
      setIsTagDropdownVisible((prev) => !prev); // Toggle tags dropdown visibility
      setIsCategoryDropdownVisible(false); // Close category dropdown when tags are clicked
    } else {
      setIsCategoryDropdownVisible(false); // Close dropdowns for other tabs
      setIsTagDropdownVisible(false);
    }
    setActiveTab(tab); // Set active tab
  };

  return (
    <div className="bg-gray-800">
    <header className="py-6 flex justify-between bg-black w-full items-center">
      <div className="flex items-center space-x-4">
        <FaBars size={24} />
        <h1 className="text-2xl font-bold">FortifyLearning</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-gray-300 pl-10 pr-4 py-2 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg">
          <FaUser />
          <span>Log In</span>
        </button>
      </div>
    </header>
    <div className="flex bg-gray-900 text-gray-200 pb-6">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-900 pl-20 pr-4 pt-4">
        <ul>
          <li className="dropdown-hover flex gap-2 py-2 px-4 items-center rounded hover:bg-gray-800">
            <MdOutlineTopic /> Topics
          </li>
          <li className="dropdown-hover flex gap-2 py-2 px-4 items-center rounded hover:bg-gray-800">
            <CiMenuKebab /> More
          </li>
        </ul>
        <h2 className="flex items-center gap-2 text-lg font-semibold mt-2">
          <IoIosArrowDown /> Categories
        </h2>
        <ul>
          {categories.map((cate, index) => (
            <li
              key={index}
              className="dropdown-hover flex gap-2 py-2 px-4 items-center rounded hover:bg-gray-800"
            >
              <div className={`${cate.div} h-3 w-3`}></div>
              {cate.category}
            </li>
          ))}
          <li className="text-gray-400 dropdown-hover flex gap-2 py-2 px-4 mb-2 items-center rounded hover:bg-gray-800">
            <AiOutlineMenuUnfold /> All Categories
          </li>
        </ul>
        <h2 className="flex items-center gap-2 text-lg font-semibold mt-2">
          <IoIosArrowDown /> Tags
        </h2>
        <ul>
          {tags.map((tag, index) => (
            <li key={index} className="dropdown-hover flex gap-2 py-2 px-4 items-center rounded hover:bg-gray-800">
              <BiSolidBookmarkAlt /> {tag}
            </li>
          ))}
          <li className="text-gray-400 dropdown-hover flex gap-2 py-2 px-4 mb-2 items-center rounded hover:bg-gray-800">
            <AiOutlineMenuUnfold /> All tags
          </li>
        </ul>
      </aside>
      <main className="flex-1 border-l pr-24 pl-4">
        {/* Topics */}
        <section>
          <ul className="flex py-4 gap-4">
            {/* Categories */}
            <li
              className={`rounded-lg p-2 flex items-center gap-2 border cursor-pointer ${activeTab === "categories" ? "border-blue-500" : ""}`}
              onClick={() => handleTabClick("categories")}
            >
              Categories <BiSolidRightArrow />
            </li>

            {/* Tags Tab */}
            <li
              className={`rounded-lg p-2 flex items-center gap-2 border cursor-pointer ${activeTab === "tags" ? "border-blue-500" : ""}`}
              onClick={() => handleTabClick("tags")}
            >
              Tags <BiSolidRightArrow />
            </li>

            {/* Latest Tab */}
            <li
              className={`border-b-2 flex items-center ${activeTab === "latest" ? "border-blue-500 text-blue-500" : "border-none"} cursor-pointer`}
              onClick={() => handleTabClick("latest")}
            >
              Latest
            </li>

            {/* Hot Tab */}
            <li
              className={`border-b-2 flex items-center ${activeTab === "hot" ? "border-blue-500 text-blue-500" : "border-none"} cursor-pointer`}
              onClick={() => handleTabClick("hot")}
            >
              Hot
            </li>
          </ul>

          <CategoriesTagsReviews
            activeTab={activeTab}
            isCategoryDropdownVisible={isCategoryDropdownVisible}
            isTagDropdownVisible={isTagDropdownVisible}
            filteredCategories={filteredCategories}
            filteredTags={filteredTags}
            searchTerm={searchTerm}
            tagSearchTerm={tagSearchTerm}
            setSearchTerm={setSearchTerm}
            setTagSearchTerm={setTagSearchTerm}
            categories={categories}
            tags={tags}
            reviews={reviews}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </section>
      </main>
    </div>
    </div>
  );
};

export default Forum;
