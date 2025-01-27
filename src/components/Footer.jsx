import React from "react";
const Footer = () => (
  <footer className="text-center py-12 bg-none text-white flex flex-col items-center gap-5 ">
    <h2 className="text-3xl font-bold ">Start saving on groceries today</h2>
    <p className="text-gray-200 w-2/5">
      Join thousands of smart shoppers who are already saving time and money
      with GrocerySave. No credit card required.
    </p>
    <div className="space-x-4">
      <button className="bg-white text-emerald-600 hover:bg-emerald-800 hover:text-white px-6 py-2 rounded">
        Sign Up Now
      </button>
      <button className=" hover:bg-white hover:text-emerald-800 text-white bg-emerald-800 px-6 py-2 rounded">
        Schedule a Demo
      </button>
    </div>
  </footer>
);

export default Footer;
