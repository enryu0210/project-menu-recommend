import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      {showGif ? (
        <div className="gif-container">
          <img src="/ufogif.gif" alt="GIF" className="gif" />
        </div>
      ) : (
        <div>
          <h2>카테고리를 선택해주세요</h2>
          <div className="category-cards">
            <div
              className="category-card"
              onClick={() => handleCategoryClick("/food")}
            >
              <h3>식사</h3>
            </div>
            <div
              className="category-card"
              onClick={() => handleCategoryClick("/drink")}
            >
              <h3>술</h3>
            </div>
            <div
              className="category-card"
              onClick={() => handleCategoryClick("/price")}
            >
              <h3>카페</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
