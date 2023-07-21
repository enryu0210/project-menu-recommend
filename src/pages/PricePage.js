/* PricePage.js */

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PricePage.css";

function PricePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCategories = location.state?.selectedCategories || [];
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handlePriceSelect = (price) => {
    setSelectedPrice(price);
  };

  useEffect(() => {
    if (selectedPrice !== null) {
      // 선택한 가격 범위와 카테고리 정보를 이용하여 원하는 검색 작업을 수행합니다.
      console.log("Selected Categories:", selectedCategories);
      console.log("Selected Price:", selectedPrice);

      // 추후 다음 페이지로 이동하거나 검색 결과를 표시하는 등의 작업을 수행할 수 있습니다.

      // 검색이 완료되면 다음 페이지로 자동 이동합니다.
      navigate("/result", {
        state: {
          selectedCategories,
          selectedPrice,
        },
      });
    }
  }, [selectedPrice, selectedCategories, navigate]);

  return (
    <div className="price-page-container">
      <h2>가격을 선택하세요:</h2>
      <div className="price-cards">
        <div
          className={`price-card ${selectedPrice === 5000 ? "selected" : ""}`}
          onClick={() => handlePriceSelect(5000)}
        >
          <h3>~5,000원</h3>
        </div>
        <div
          className={`price-card ${selectedPrice === 10000 ? "selected" : ""}`}
          onClick={() => handlePriceSelect(10000)}
        >
          <h3>~10,000원</h3>
        </div>
        <div
          className={`price-card ${selectedPrice === 20000 ? "selected" : ""}`}
          onClick={() => handlePriceSelect(20000)}
        >
          <h3>~20,000원</h3>
        </div>
        <div
          className={`price-card ${selectedPrice === 50000 ? "selected" : ""}`}
          onClick={() => handlePriceSelect(50000)}
        >
          <h3>~50,000원</h3>
        </div>
        <div
          className={`price-card ${selectedPrice === 50001 ? "selected" : ""}`}
          onClick={() => handlePriceSelect(50001)}
        >
          <h3>50,000원 이상</h3>
        </div>
      </div>
    </div>
  );
}

export default PricePage;
