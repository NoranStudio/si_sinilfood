import React from 'react';
import './App.css';
import logo from './assets/sinil_logo.png';  // 로고 이미지
import shinliFoodImage from './assets/SHINLI FOOD.png';  // SHINLI FOOD 이미지

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
            <li className="nav-item company"><a href="#about">회사소개</a></li>
            <li className="nav-item business"><a href="#business">사업영역</a></li>
            <li className="nav-item product"><a href="#products">제품소개</a></li>
            <li className="nav-item service"><a href="#services">고객서비스</a></li>
          </ul>
        </nav>

        {/* SHINLI FOOD 이미지 */}
        <img src={shinliFoodImage} alt="SHINLI FOOD" className="shinli-food-img" />

        {/* 배너 텍스트 배치 */}
        <h1 className="title-large">식용유 및 식품 유통</h1>
        <h1 className="title-large">
          전문기업 <span className="highlight">신일푸드</span>
        </h1>
        <p className="description">
          <strong>신일푸드</strong> 만의 독자적인 전용 물류 시스템으로 전국적 유통 체인망이 구축되어 있습니다.
        </p>

        {/* 우측 사이드 버튼 */}
        <div className="side-buttons">
          <a href="#contact" className="contact-button phone">📞</a>
          <a href="#contact" className="contact-button headset">🎧</a>
        </div>
      </div>

      {/* 페이지 내용 (예: 고객문의 페이지) */}
      <div id="contact" className="contact-page">
        <h2>고객문의 페이지</h2>
        <p>여기서 고객문의를 하실 수 있습니다.</p>
      </div>
    </div>
  );
}

export default App;