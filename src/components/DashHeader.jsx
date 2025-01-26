import React from "react";
import { LuShoppingBasket } from "react-icons/lu";
import { useSelector } from "react-redux";
// import { LuShoppingBasket } from "react-icons/lu";
// import { useSelector } from "react-redux";
// // import { logOut } from "../services/authService";
// import { useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { logOut } from "../store/slices/AuthSlice";

function DashHeader() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.currentUser);
  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center px-5 w-full">
      <div className="flex items-center gap-5 ml-5">
        <LuShoppingBasket className="text-emerald-700" size={30} />
        <p className="font-bold">GrocerySave</p>
      </div>

      <div className="logoutSection flex items-center gap-5">
        {user ? (
          <>
            <p className="userEmail text-emerald-600">{user.email}</p>
            <button
              className="bg-emerald-700 text-white px-5 py-1 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default DashHeader;
