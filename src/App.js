import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* //& Here add your different pages */}
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
