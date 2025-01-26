import React from "react";

const CategoryDetails = ({ selectedCategory }) => {
  if (!selectedCategory) return <p>No category selected.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{selectedCategory.name}</h2>
      {selectedCategory.lists?.map((list, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{list.name}</h3>
          <ul className="list-disc ml-6">
            {list.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoryDetails;
