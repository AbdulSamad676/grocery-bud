import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import {
  addNewCategory,
  deleteCategoryById,
} from "../store/slices/CategorySlice";

const Sidebar = ({ categories, onSelectCategory, selectedCategory }) => {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const dispatch = useDispatch();
  const handleAddCategory = () => {
    if (!newCategoryName.trim()) {
      alert("Category name cannot be empty!");
      return;
    }
    const newCategory = {
      name: newCategoryName,
      lists: [], // Empty array as specified
    };
    console.log("action called");

    dispatch(addNewCategory(newCategory)); // Call the Redux action
    setNewCategoryName(""); // Reset the input
    setShowCategoryForm(false); // Close the form
  };
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
        <div className="my-3 p-2 border border-gray-200 rounded">
          <p className="font-semibold mb-2">New Category</p>
          <input
            type="text"
            className="border border-gray-300 rounded p-1 w-full"
            placeholder="Enter category name"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <button
            className=" w-full mt-2 bg-emerald-700 text-white px-2 py-1 rounded"
            onClick={handleAddCategory}
          >
            Add Category
          </button>
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
              <IoCloseSharp
                onClick={() => {
                  dispatch(deleteCategoryById(category.id));
                }}
              />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
