import React, { useState } from "react";
import { LuShoppingBasket } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../../store/slices/AuthSlice"; // Import the login function
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await dispatch(logIn(email, password)); // Call the login function
      setSuccess(true); // Show success message
      setLoading(false);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-2 text-green-700">
        <LuShoppingBasket size={48} />
      </div>

      {/* Welcome Back Text */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Welcome Back
      </h2>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96 space-y-4"
      >
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">Logged in successfully!</p>}

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>

        <button
          type="submit"
          className=" flex justify-center w-full bg-emerald-600 text-white p-2 rounded-md hover:bg-emerald-700 focus:outline-none cursor-pointer"
        >
          {loading ? (
            <>
              <svg
                className="w-5 h-5 text-white animate-spin mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
                ></path>
              </svg>
            </>
          ) : (
            "Login"
          )}
        </button>
        <p className="text-center">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="text-emerald-500 font-semibold cursor-pointer"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
