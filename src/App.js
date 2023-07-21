/* App.js */

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FoodPage from "./pages/FoodPage";
import DrinkPage from "./pages/DrinkPage";
import PricePage from "./pages/PricePage";
import ResultPage from "./pages/ResultPage";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home selectedCategory={selectedCategory} />}
        />
        <Route
          path="/food"
          element={<FoodPage setSelectedCategory={setSelectedCategory} />}
        />
        <Route
          path="/drink"
          element={<DrinkPage setSelectedCategory={setSelectedCategory} />}
        />
        <Route
          path="/price"
          element={<PricePage selectedCategory={selectedCategory} />}
        />
        <Route
          path="/result"
          element={<ResultPage selectedCategory={selectedCategory} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
