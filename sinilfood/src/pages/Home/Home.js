import React from "react";
import "../../assets/styles/global.css";
import logo from "../../assets/img/sinil_logo.png";
//import logo_big from '../../assets/img/logo_big2.png'; // 로고 이미지
import shinliFoodImage from "../../assets/img/SHINLI FOOD white.png"; // SHINLI FOOD 이미지
import phoneIcon from "../../assets/img/phone.png";
import headsetIcon from "../../assets/img/headset.png";
//협력사 로고 이미지
import leftbutton from "../../assets/img/left_button.png";
import rightbutton from "../../assets/img/right_button.png";

import counsel_image from "../../assets/img/counsel_image.png"; // 상담 이미지

import Footer from "../../components/Footer"; //footer
import OilSection from "./OilSection";
import CenterContents from "./CenterContents"; // CenterContents 파일 경로를 수정하세요

// 프랜차이즈 슬라이더 컴포넌트 가져오기
import FranchiseSlider from "./FranchiseSlider.js";
import Partners from "./Partners.js";

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

      {/* 전국직영센터 콘텐츠 */}
      <CenterContents />

      {/* 협력사 및 제조사 상단 멘트 */}

      {/* 프랜차이즈 물류업체 슬라이더 */}
      <FranchiseSlider />

      {/* 주식회사 신일푸드 새소식 섹션 */}
      <div className="news-section">
        <div className="newsmain-header">
          <h3 className="newsmain-title">
            <span>주식회사 신일푸드</span>
            <span>새소식</span>
          </h3>
          <div className="news-navigation">
            <button className="arrow-box left-arrow">
              <img src={leftbutton} alt="왼쪽 화살표" className="arrow-img" />
            </button>
            <button className="arrow-box right-arrow">
              <img
                src={rightbutton}
                alt="오른쪽 화살표"
                className="arrow-img"
              />
            </button>
          </div>
        </div>
        <div className="news-grid">
          <div className="news-item">
            <h4 className="news-notice">NOTICE</h4>
            <h3 className="news-title">
              프랜차이즈산업협회, 2024 제2회 상생파...
            </h3>
            <p className="news-description">
              [2024 제2회 파트너스데이 행사 모습 (제공=KFA
              상생파트너스위원회)]한...
            </p>
            <span className="news-date">2024. 10. 21</span>
          </div>
          <div className="news-item">
            <h4 className="news-notice">NOTICE</h4>
            <h3 className="news-title">
              프랜차이즈산업협회, 2024 제2회 상생파...
            </h3>
            <p className="news-description">
              [2024 제2회 파트너스데이 행사 모습 (제공=KFA
              상생파트너스위원회)]한...
            </p>
            <span className="news-date">2024. 10. 21</span>
          </div>
          <div className="news-item">
            <h4 className="news-notice">NOTICE</h4>
            <h3 className="news-title">
              프랜차이즈산업협회, 2024 제2회 상생파...
            </h3>
            <p className="news-description">
              [2024 제2회 파트너스데이 행사 모습 (제공=KFA
              상생파트너스위원회)]한...
            </p>
            <span className="news-date">2024. 10. 21</span>
          </div>
        </div>
      </div>

      {/* 상담센터 섹션 */}
      <div className="counsel-center">
        <div className="counsel-content">
          <h2 className="counsel-title">
            협력사 사업문의의 <span className="highlight">상담센터</span>
          </h2>
          <p className="counsel-description">
            신일푸드는 함께 성장할 파트너사들을 기다립니다. <br />
            식용유 구매와 제조관련 상담문의를 남겨주세요.
          </p>
          <button className="counsel-button">
            온라인 상담문의
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="22"
              viewBox="0 0 12 22"
              fill="none"
              className="arrow-svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.414002 20.9111C0.948548 21.4501 1.81037 21.4501 2.34491 20.9111L11.4104 11.7701C11.8358 11.3411 11.8358 10.6481 11.4104 10.2191L2.34491 1.07808C1.81037 0.539078 0.948548 0.539078 0.414002 1.07808C-0.120543 1.61708 -0.120543 2.48608 0.414002 3.02508L8.31218 11.0001L0.403093 18.9751C-0.120544 19.5031 -0.120543 20.3831 0.414002 20.9111Z"
                fill="white"
              />
            </svg>
          </button>
          <p className="counsel-info">
            평일 AM 09:00 - PM 17:00 <br />
            <span className="phone-number">055. 334. 7789</span>
          </p>
        </div>
        <div className="counsel-image">
          <img
            src={counsel_image}
            alt="상담 이미지"
            className="counsel-image-file"
          />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
