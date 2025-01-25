import React from "react";
const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className=" flex justify-center items-center ">{children}</div>
    </div>
  );
};

export default AuthLayout;
