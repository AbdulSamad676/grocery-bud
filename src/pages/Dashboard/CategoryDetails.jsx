import React, { useState, useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";
import AddList from "../../modals/AddList";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteList } from "../../store/slices/CategorySlice";

const CategoryDetails = ({ selectedCategory }) => {
  const [showModal, setShowModal] = useState(false);
  const categoryId = selectedCategory.id;
  const dispatch = useDispatch();

  // Initialize completedItems state for each list
  const [completedItems, setCompletedItems] = useState({});

  // Update completedItems when selectedCategory or its lists change
  useEffect(() => {
    if (selectedCategory?.lists) {
      const newCompletedItems = selectedCategory.lists.reduce((acc, list) => {
        acc[list.name] = new Array(list.items.length).fill(false);
        return acc;
      }, {});
      setCompletedItems(newCompletedItems);
    }
  }, [selectedCategory]);

  const handleCheckboxChange = (listName, index) => {
    const updatedCompletedItems = { ...completedItems };
    updatedCompletedItems[listName][index] =
      !updatedCompletedItems[listName][index]; // Toggle the state
    setCompletedItems(updatedCompletedItems);
  };

  if (!selectedCategory) return <p>No category selected.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{selectedCategory.name}</h2>
      <div className="flex">
        <button
          className="rounded-sm text-sm flex gap-1.5 bg-emerald-700 text-white items-center px-3 py-1"
          onClick={() => setShowModal(true)}
        >
          Add List
          <FaPlusSquare size={24} />
        </button>
      </div>

      {/* Check if there are lists to render */}
      {selectedCategory.lists?.length > 0 ? (
        selectedCategory.lists.map((list, listIndex) => (
          <div
            key={listIndex}
            className="my-4 border border-gray-200 bg-white rounded-xl py-4 px-5 relative"
          >
            <button
              className="absolute top-2 right-2 text-red-400 bg-red-100 p-1 rounded-sm"
              onClick={() => {
                dispatch(deleteList(categoryId, list.name));
              }}
            >
              <AiOutlineDelete size={24} />
            </button>
            <h3 className="text-lg font-semibold">{list.name}</h3>
            <ul className="list-disc">
              {list.items?.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className={`flex items-center my-1 ${
                    completedItems[list?.name]?.[itemIndex]
                      ? "line-through text-green-800"
                      : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(list.name, itemIndex)}
                    checked={completedItems[list.name]?.[itemIndex] || false}
                    className="mr-2 text-emerald-300"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No lists available in this category.</p> // Fallback message when no lists are present
      )}

      {/* AddList Modal */}
      {showModal && (
        <AddList categoryId={categoryId} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default CategoryDetails;
