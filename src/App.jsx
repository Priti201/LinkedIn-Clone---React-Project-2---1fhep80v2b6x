import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Routers from "./Routes/Routers";
import Signup from "./pages/auth pages/signup/Signup";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="app-container">
            {/* <Navbar />
            <Routers /> */}
            <Signup/>
      </div>
    </div>
  );
};

export default App;
