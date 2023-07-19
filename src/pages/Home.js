import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [showAnimation] = useState(true);

  return (
    <div className="Home">
      {showAnimation ? (
        <div className="cybernetic-animation">{/* 애니메이션 요소 */}</div>
      ) : (
        <div className="home-content">{/* 홈 화면 내용 */}</div>
      )}
    </div>
  );
};

export default Home;
