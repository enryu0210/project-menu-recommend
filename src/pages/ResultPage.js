/* ResultPage.js */

import React from "react";
import { useLocation } from "react-router-dom";
import "./ResultPage.css";

function ResultPage() {
  const location = useLocation();
  const selectedCategories = location.state?.selectedCategories || [];
  const selectedPrice = location.state?.selectedPrice || null;

  return (
    <div className="result-page-container">
      <h2>선택한 카테고리:</h2>
      <ul>
        {selectedCategories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      <h2>선택한 가격 범위:</h2>
      <p>{selectedPrice === null ? "선택하지 않음" : `${selectedPrice}원`}</p>
      {/* 결과를 표시하거나 다른 내용을 추가할 수 있습니다. */}
    </div>
  );
}

export default ResultPage;
