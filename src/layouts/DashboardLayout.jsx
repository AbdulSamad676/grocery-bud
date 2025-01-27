// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { listenToAuthStateChanges } from "../store/slices/AuthSlice"; // Import the listener action
// import Sidebar from "../components/Sidebar";
// import CategoryDetails from "../pages/Dashboard/CategoryDetails";
// import DashHeader from "../components/DashHeader";
// import { getAllCategories } from "../store/slices/CategorySlice";
// import Header from "../components/Header";
// import { listenToAuthStateChanges } from "../store/slices/AuthSlice";

// const DashboardLayout = ({ children, title }) => {
//   const dispatch = useDispatch();
//   const { categories, loading, error } = useSelector(
//     (state) => state.categories
//   );
//   const { user, loading: authLoading } = useSelector((state) => state.auth);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Fetch categories on component mount
//   useEffect(() => {
//     dispatch(getAllCategories());
//   }, [dispatch]);

//   // Listen for authentication state changes on mount
//   useEffect(() => {
//     dispatch(listenToAuthStateChanges());
//   }, [dispatch]);

//   // Set the first category as selected when categories are loaded
//   useEffect(() => {
//     if (categories.length > 0) {
//       setSelectedCategory(categories[0]);
//     }
//   }, [categories]);

//   if (authLoading) {
//     return <div>Loading...</div>; // Show loading state while checking auth status
//   }

//   return (
//     <div className="grid grid-cols-12 custom-gradient">
//       {/* Sidebar and main content layout */}
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
//           {/* <DashHeader /> */}
//           <Header isDashboard={true} />
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
import Sidebar from "../components/Sidebar";
import CategoryDetails from "../pages/Dashboard/CategoryDetails";
import Header from "../components/Header";
import { getAllCategories } from "../store/slices/CategorySlice";
import { listenToAuthStateChanges } from "../store/slices/AuthSlice";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const DashboardLayout = ({ children, title }) => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Sidebar hidden by default on smaller screens

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
    <div className="grid grid-cols-12 custom-gradient h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-40 border border-gray-300 px-5 py-3 transition-transform transform ${
          isSidebarVisible ? " pt-10 translate-x-0" : "-translate-x-full "
        } md:relative md:translate-x-0 md:col-span-2 md:block`}
      >
        {loading && <p>Loading categories...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        <Sidebar
          categories={categories}
          onSelectCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>

      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden px-2 py-1 text-white bg-emerald-700 rounded-md"
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      >
        {isSidebarVisible ? (
          <FaArrowAltCircleLeft />
        ) : (
          <FaArrowAltCircleRight />
        )}
      </button>

      {/* Main Content */}
      <main className="flex flex-col col-span-12 md:col-span-10 h-full overflow-auto">
        <div className="header h-16 bg-white border border-gray-200 p-2 flex justify-between items-center">
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
