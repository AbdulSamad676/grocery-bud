import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";

const Sidebar = ({ categories, onSelectCategory, selectedCategory }) => {
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  return (
    <div className="w-full">
      <div className="sidebar-header mb-4 flex justify-between items-center">
        <h2 className="text-lg font-bold ">Categories</h2>
        <button
          onClick={() => {
            setShowCategoryForm((prev) => !prev);
          }}
        >
          <LuPlus size={24} className="text-emerald-700" />
        </button>
      </div>
      {showCategoryForm && (
        <div>
          <p className="font-semibold">New Category</p>
        </div>
      )}
      <ul className="space-y-2">
        {categories.map((category) => (
          <div className="flex justify-between">
            <li
              key={category.id}
              className={`p-2 cursor-pointer flex-auto ${
                selectedCategory?.id === category.id
                  ? "bg-emerald-100 text-black"
                  : "hover:bg-emerald-100"
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {category.name}
            </li>
            <button>
              <IoCloseSharp />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
