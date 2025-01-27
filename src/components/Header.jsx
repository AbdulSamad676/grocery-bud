import React from "react";
import { LuShoppingBasket } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../store/slices/authSlice";

const Header = ({ isDashboard }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  const handleLogout = async () => {
    await dispatch(logOut());
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center px-5 py-3 w-full bg-white shadow-md">
      <div className="flex items-center gap-5">
        <LuShoppingBasket className="text-emerald-700" size={30} />
        <p className="text-2xl font-bold text-black">GrocerySave</p>
      </div>

      <div className="flex items-center gap-5">
        {isDashboard && user ? (
          // Display user email and logout button for dashboard
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
          // Display sign-in and sign-up buttons for main layout
          <nav className="space-x-4">
            <button
              className="text-gray-700"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
            <button
              className="bg-emerald-600 text-white px-4 py-2 rounded"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
