// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCategories } from "../store/slices/CategorySlice"; // Import the action
// import Sidebar from "../components/Sidebar";
// import CategoryDetails from "../pages/Dashboard/CategoryDetails";
// import DashHeader from "../components/DashHeader";

// const DashboardLayout = ({ children, title }) => {
//   const dispatch = useDispatch();
//   const { categories, loading, error } = useSelector(
//     (state) => state.categories
//   ); // Access categories from Redux state
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const user = useSelector((state) => state.auth.user);
//   // Fetch categories on component mount
//   useEffect(() => {
//     dispatch(getAllCategories());
//   }, [dispatch]);

//   // Set the first category as selected when categories are loaded
//   useEffect(() => {
//     if (categories.length > 0) {
//       setSelectedCategory(categories[0]); // Select the first category by default
//     }
//   }, [categories]);

//   return (
//     <div className="grid grid-cols-12 custom-gradient">
//       <div className="col-span-2 h-full min-h-[100vh] border border-gray-300 px-5 py-3">
//         {loading && <p>Loading categories...</p>}
//         {error && <p className="text-red-500">Error: {error}</p>}
//         <Sidebar
//           categories={categories}
//           onSelectCategory={setSelectedCategory}
//           selectedCategory={selectedCategory}
//         />
//       </div>

//       <main className="flex flex-col col-span-10 h-full overflow-auto">
//         <div className="header h-16  bg-white border border-gray-200 p-2 flex justify-center items-center">
//           <DashHeader user={user} />
//         </div>
//         <div className="w-full px-5 py-3">
//           {selectedCategory ? (
//             <CategoryDetails selectedCategory={selectedCategory} />
//           ) : (
//             <p>Please select a category</p>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { listenToAuthStateChanges } from "../store/slices/AuthSlice"; // Import the listener action
import Sidebar from "../components/Sidebar";
import CategoryDetails from "../pages/Dashboard/CategoryDetails";
import DashHeader from "../components/DashHeader";
import { getAllCategories } from "../store/slices/CategorySlice";
import Header from "../components/Header";
import { listenToAuthStateChanges } from "../store/slices/authSlice";

const DashboardLayout = ({ children, title }) => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch categories on component mount
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  // Listen for authentication state changes on mount
  useEffect(() => {
    dispatch(listenToAuthStateChanges());
  }, [dispatch]);

  // Set the first category as selected when categories are loaded
  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  if (authLoading) {
    return <div>Loading...</div>; // Show loading state while checking auth status
  }

  return (
    <div className="grid grid-cols-12 custom-gradient">
      {/* Sidebar and main content layout */}
      <div className="col-span-2 h-full min-h-[100vh] border border-gray-300 px-5 py-3">
        {loading && <p>Loading categories...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        <Sidebar
          categories={categories}
          onSelectCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>

      <main className="flex flex-col col-span-10 h-full overflow-auto">
        <div className="header h-16  bg-white border border-gray-200 p-2 flex justify-center items-center">
          {/* <DashHeader /> */}
          <Header isDashboard={true} />
        </div>
        <div className="w-full px-5 py-3">
          {selectedCategory ? (
            <CategoryDetails selectedCategory={selectedCategory} />
          ) : (
            <p>Please select a category</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
