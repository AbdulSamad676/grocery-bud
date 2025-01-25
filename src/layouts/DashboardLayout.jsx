import React from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children, title }) => {
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-2  h-full min-h-[100vh] flex justify-center border border-gray-400 ">
        {/* <Sidebar /> */} sidebar Here
      </div>

      <main className=" flex flex-col col-span-10 h-full overflow-auto">
        {/* <Header title={title} /> */}
        <h2>header here</h2>
        <div className="w-full p-4">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
