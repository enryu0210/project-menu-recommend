/* DrinkPage.js */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DrinkPage.css";

function DrinkPage() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category)) {
      // 이미 선택된 카테고리인 경우 선택 해제
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((cat) => cat !== category)
      );
    } else {
      // 새로운 카테고리를 선택한 경우 추가
      setSelectedCategories((prevSelected) => [...prevSelected, category]);
    }
  };

  const handleNext = () => {
    if (selectedCategories.length === 0) {
      // 카테고리를 선택하지 않았을 경우 알림 표시
      alert("적어도 하나 이상의 카테고리를 선택해주세요.");
    } else {
      navigate("/price", { state: { selectedCategories } });
    }
  };

  return (
    <div className="drink-page-container">
      <h2>원하는 종류를 선택해 주세요 (중복 선택 가능)</h2>
      <div className="category-cards">
        <div
          className={`category-card ${
            selectedCategories.includes("헌팅포차") ? "selected" : ""
          }`}
          onClick={() => handleCategorySelect("헌팅포차")}
        >
          <h3>헌팅포차</h3>
        </div>
        <div
          className={`category-card ${
            selectedCategories.includes("이자카야") ? "selected" : ""
          }`}
          onClick={() => handleCategorySelect("이자카야")}
        >
          <h3>이자카야</h3>
        </div>
        <div
          className={`category-card ${
            selectedCategories.includes("바") ? "selected" : ""
          }`}
          onClick={() => handleCategorySelect("바")}
        >
          <h3>바</h3>
        </div>
        <div
          className={`category-card ${
            selectedCategories.includes("일반술집") ? "selected" : ""
          }`}
          onClick={() => handleCategorySelect("일반술집")}
        >
          <h3>일반술집</h3>
        </div>
      </div>
      <button onClick={handleNext}>다음</button>
    </div>
  );
}

export default DrinkPage;
