// import "./App.css";
// import React from "react";
// function App() {
//   return (
//     <>
//       <div className="text-3xl font-bold underline text-red-600">
//         Grocery app with Firebase
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { routesConfig } from "../routs/routs";
// import { useSelector } from "react-redux";
const App = () => {
  // const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    // className={darkMode ? "dark" : ""}
    <div>
      <Routes>
        {routesConfig.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
