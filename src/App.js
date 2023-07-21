import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FoodPage from "./pages/FoodPage";
import DrinkPage from "./pages/DrinkPage";
import PricePage from "./pages/PricePage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/drink" element={<DrinkPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
