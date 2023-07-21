/* FoodPage.js */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FoodPage.css";

function FoodPage() {
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
      // 선택된 카테고리가 없는 경우 알림 창 띄우기
      alert("적어도 하나 이상의 카테고리를 선택해주세요.");
    } else {
      navigate("/price", { state: { selectedCategories } });
    }
  };

  return (
    <div className="food-page-container">
      <h2>원하는 종류를 선택해 주세요 (중복 선택 가능)</h2>
      <div className="category-cards">
        <div
          className={`category-card ${
            selectedCategories.includes("한식") ? "selected" : ""
          }`}
          onClick={() => handleCategorySelect("한식")}
        >
          <h3>한식</h3>
        </div>
        <div
          className={`category-card ${
            selectedCategories.includes("중식") ? "selected" : ""
          }`}
          onClick={() => handleCategorySelect("중식")}
        >
          <h3>중식</h3>
        </div>
        <div
          className={`category-card ${
            selectedCategories.includes("일식") ? "selected" : ""
          }`}
          onClick={() => handleCategorySelect("일식")}
        >
          <h3>일식</h3>
        </div>
        <div
          className={`category-card ${
            selectedCategories.includes("양식") ? "selected" : ""
          }`}
          onClick={() => handleCategorySelect("양식")}
        >
          <h3>양식</h3>
        </div>
        <div
          className={`category-card ${
            selectedCategories.includes("분식") ? "selected" : ""
          }`}
          onClick={() => handleCategorySelect("분식")}
        >
          <h3>분식</h3>
        </div>
      </div>
      <button onClick={handleNext}>다음</button>
    </div>
  );
}

export default FoodPage;
