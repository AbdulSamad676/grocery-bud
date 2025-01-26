import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addNewList } from "../store/slices/CategorySlice";
import { IoCloseSharp } from "react-icons/io5";

const AddList = ({ categoryId, onClose }) => {
  const [listName, setListName] = useState("");
  const [items, setItems] = useState([""]);
  const dispatch = useDispatch();
  // Handle adding a new input for items
  const handleAddItem = () => {
    setItems([...items, ""]);
  };

  // Handle updating the value of an item input
  const handleItemChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = value;
    setItems(updatedItems);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = { name: listName, items };
    // onSubmit(newList); // Pass the new list back to the parent component
    dispatch(addNewList(categoryId, newList));
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 custom-gradient  flex items-center justify-center">
      <div className=" bg-white p-6 rounded-md w-96 relative">
        <h2 className="text-xl font-bold mb-4">Add New List</h2>
        <form onSubmit={handleSubmit}>
          {/* Input for list name */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="listName"
            >
              List Name
            </label>
            <input
              type="text"
              id="listName"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              required
            />
          </div>
          {/* Button to add more items */}
          <button
            type="button"
            className="text-emerald-700 text-sm flex justify-end items-center gap-1 w-full mb-3"
            onClick={handleAddItem}
          >
            <p className="font-semibold">Add Item</p>
            <FaPlusSquare size={24} />
          </button>
          {/* Inputs for items */}
          {items.map((item, index) => (
            <div key={index} className="mb-2 flex items-center gap-2">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={item}
                onChange={(e) => handleItemChange(index, e.target.value)}
                placeholder={`Item ${index + 1}`}
                required
              />
            </div>
          ))}

          {/* Submit button */}
          <div className="mt-4">
            <button
              type="submit"
              className="bg-emerald-700 text-white px-4 py-2 rounded-md w-full"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-red-500"
          onClick={onClose}
        >
          <IoCloseSharp size={24} />
        </button>
      </div>
    </div>
  );
};

export default AddList;
