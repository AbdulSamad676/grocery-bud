import React from "react";
const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen custom-gradient">
      {children}
    </div>
  );
};

export default AuthLayout;
