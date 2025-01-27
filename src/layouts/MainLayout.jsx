import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Header from ""; // Import your Header component
// import Footer from "../components/Footer"; // Import your Footer component

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white">
        <Header isDashboard={true} />
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
