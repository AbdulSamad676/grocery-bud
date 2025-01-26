import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; // Import Firestore methods
import { db } from "../../firebase"; // Firebase configuration file
// import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CategoryDetails from "../pages/Dashboard/CategoryDetails";

const DashboardLayout = ({ children, title }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch categories from Firestore
  useEffect(() => {
    const fetchCategories = async () => {
      const categoryCollection = collection(db, "category");
      const snapshot = await getDocs(categoryCollection);
      const categoryData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categoryData);
      if (categoryData.length > 0) setSelectedCategory(categoryData[0]); // Select the first category by default
    };

    fetchCategories();
  }, []);

  return (
    <div className="grid grid-cols-12 dark:bg-black">
      <div className="col-span-2  h-full min-h-[100vh] border border-gray-300 px-5 py-3 ">
        <Sidebar
          categories={categories}
          onSelectCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>

      <main className="flex flex-col col-span-10 h-full overflow-auto">
        {/* <Header title={title} /> */}
        <div className="header">Header text</div>
        <div className="w-full">
          <CategoryDetails selectedCategory={selectedCategory} />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
