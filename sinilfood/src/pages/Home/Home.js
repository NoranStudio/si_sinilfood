import React from "react";
import "../../assets/styles/global.css";

import Header from "../../components/Header.js"; // 헤더
import MainBanner from "./MainBanner.js"; // 메인배너
import OilSection from "./OilSection"; // 오일섹션
import CenterContents from "./CenterContents"; // 전국센터, 파트너
import Slider from "./Slider.js"; // 프렌차이즈
import News from "./News.js"; // 새소식
import CS from "./CS.js"; // 고객센터
import Footer from "../../components/Footer"; // 푸터

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <div className="page-content">
        <div>
          <h2 className="page-title">
            <span className="black-highlight">안전하고 품질 높은 제품</span>
            <span className="normal-text">으로</span>
            <br />
            <span className="yellow-highlight">
              외식산업에 최적화된 유통 서비스
            </span>
            <span className="normal-text">를 선보입니다.</span>
          </h2>
          <p className="page-description">
            신일푸드는 고객의 안전과 건강을 지키기 위해,
            <br />
            엄선된 품질과 철저한 관리를 바탕으로 최상의 제품만을 제공합니다.
          </p>
        </div>
      </div>
      <OilSection />
      <CenterContents />
      <Slider />
      <News />
      <CS />
      <Footer />
    </div>
  );
}

export default App;
