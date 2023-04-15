import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import ExersizeDetail from "./components/pages/ExersizeDetail";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

const App = () => {
  return (
    <div>
      <Box width="400px" sx={{ width: { xl: "1448px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExersizeDetail />} />
        </Routes>
      </Box>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
