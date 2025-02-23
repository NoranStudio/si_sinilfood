import React from "react";
import "../../assets/styles/global.css";
import logo from "../../assets/img/sinil_logo.png";
//import logo_big from '../../assets/img/logo_big2.png'; // 로고 이미지
import shinliFoodImage from "../../assets/img/SHINLI FOOD white.png"; // SHINLI FOOD 이미지
import phoneIcon from "../../assets/img/phone.png";
import headsetIcon from "../../assets/img/headset.png";

import Footer from "../../components/Footer"; //footer
import OilSection from "./OilSection";
import CenterContents from "./CenterContents"; // CenterContents 파일 경로를 수정하세요

// 프랜차이즈 슬라이더 컴포넌트 가져오기
import Slider from "./Slider.js";
import News from "./News.js";
import CS from "./CS.js";

function App() {
  return (
    <div className="App">
      {/* 상단 배너 */}
      <div className="banner">
        <div className="logo">
          <img src={logo} alt="Sinilfood Logo" />
        </div>

        {/* 네비게이션 바 */}
        <nav className="navbar">
          <ul>
            <li className="nav-item company">
              <a href="#about">회사소개</a>
            </li>
            <li className="nav-item business">
              <a href="#business">사업영역</a>
            </li>
            <li className="nav-item product">
              <a href="#products">제품소개</a>
            </li>
            <li className="nav-item service">
              <a href="#services">고객서비스</a>
            </li>
          </ul>
        </nav>

        {/* SHINLI FOOD 이미지 */}
        <img
          src={shinliFoodImage}
          alt="SHINLI FOOD"
          className="shinli-food-img"
        />

        {/* 배너 텍스트 배치 */}
        <h1 className="title-large">식용유 및 식품 유통</h1>
        <h1 className="title-large">
          전문기업 <span className="highlight">신일푸드</span>
        </h1>
        <p className="description">
          <strong>신일푸드</strong> 만의 독자적인 전용 물류 시스템으로 전국적
          유통 체인망이 구축되어 있습니다.
        </p>

        {/* 우측 사이드 버튼 */}
        <div className="side-buttons">
          <a href="#contact" className="contact-button">
            <img src={phoneIcon} alt="Phone Icon" className="icon-image" />
          </a>
          <a href="#contact" className="contact-button">
            <img src={headsetIcon} alt="Headset Icon" className="icon-image" />
          </a>
        </div>
      </div>
      {/* 페이지 내용 (예: 고객문의 페이지) */}
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
      {/* 페이지 하단 콘텐츠 */}
      <OilSection />
      {/* 전국직영센터,파트너 */}
      <CenterContents />
      {/* 프랜차이즈 */}
      <Slider />
      {/* 뉴스 */}
      <News />
      {/* 상담센터 섹션 */}
      <CS />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
