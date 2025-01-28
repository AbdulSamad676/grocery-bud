import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen custom-gradient ">
      {/* Header */}
      <header className="bg-gray-800 text-white">
        <Header isDashboard={true} />
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 px-5">{children}</main>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white p-4 text-center">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
