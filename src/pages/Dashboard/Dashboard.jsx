import React, { useEffect, useState } from "react";
import { db, collection, getDocs, addDoc } from "../../../firebase"; // Import necessary methods

function Dashboard() {
  const [categories, setCategories] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state to show loading while fetching

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all documents from the 'category' collection
        const categoriesSnapshot = await getDocs(collection(db, "category"));

        // Map the documents to an array of category data
        const categoriesData = categoriesSnapshot.docs.map((doc) => ({
          id: doc.id, // Use Firestore document ID as a unique key
          ...doc.data(), // Spread other fields (name, etc.)
        }));

        // Set the fetched categories to state
        setCategories(categoriesData);
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []);

  // Function to handle adding a new category to Firestore (with hardcoded data)
  const handleAddCategory = async () => {
    try {
      // Add a new category document to the Firestore database
      const categoryRef = collection(db, "category");

      const newCategoryData = {
        name: "New Category", // Hardcoded category name
        lists: [
          {
            name: "List 1", // Hardcoded list name
            items: ["Item 1", "Item 2"], // Hardcoded items
          },
          {
            name: "List 2", // Another hardcoded list name
            items: ["Item A", "Item B"], // Hardcoded items
          },
        ],
      };

      // Add data to Firestore
      await addDoc(categoryRef, newCategoryData);

      // Re-fetch the data after adding
      //   fetchData();
    } catch (error) {
      console.error("Error adding category: ", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading text while fetching data
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {/* Render categories */}
      <div>
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              {/* Render lists */}
              <div>
                {category.lists && category.lists.length > 0 ? (
                  category.lists.map((list, index) => (
                    <div key={index}>
                      <h4>{list.name}</h4>
                      <ul>
                        {list.items &&
                          list.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <p>No lists available in this category.</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>

      {/* Button to add a new category */}
      <button
        onClick={handleAddCategory}
        className="bg-amber-700 text-white font-bold cursor-pointer p-2 mt-10"
      >
        Add Category
      </button>
    </div>
  );
}

export default Dashboard;
