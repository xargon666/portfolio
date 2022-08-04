import React from "react";
import "./App.css";
import { About, Home, Portfolio } from "./pages";
import { Routes, Route } from "react-router-dom";
const App = () => (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </>
);

export default App;
