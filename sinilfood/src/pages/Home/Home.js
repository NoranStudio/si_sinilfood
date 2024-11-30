import React from 'react';
import '../../assets/styles/global.css';
import logo from '../../assets/img/sinil_logo.png'; 
import logo_big from '../../assets/img/logo_big2.png'; // 로고 이미지
import shinliFoodImage from '../../assets/img/SHINLI FOOD white.png'; // SHINLI FOOD 이미지
import shinliFoodyellowImage from '../../assets/img/SHINLI FOOD.png'; // SHINLI FOOD 이미지
import phoneIcon from '../../assets/img/phone.png'; // 전화 아이콘 이미지 추가
import headsetIcon from '../../assets/img/headset.png'; // 헤드셋 아이콘 이미지 추가
import fc_oil from '../../assets/img/fc_oil.png'; // 전화 아이콘 이미지 추가
import store_oil from '../../assets/img/store_oil.png'; // 헤드셋 아이콘 이미지 추가
import truckImage from '../../assets/img/truck.png'; // 헤드셋 아이콘 이미지 추가

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
            <span className="black-highlight">안전하고 품질 높은 제품</span><span className="normal-text">으로</span>
            <br />
            <span className="yellow-highlight">외식산업에 최적화된 유통 서비스</span><span className="normal-text">를 선보입니다.</span>
          </h2>
          <p className="page-description">
            신일푸드는 고객의 안전과 건강을 지키기 위해,<br />
            엄선된 품질과 철저한 관리를 바탕으로 최상의 제품만을 제공합니다.
          </p>
        </div>
        <img src={logo_big} alt="Logo" className="page-logo" />
      </div>

      {/* 페이지 하단 콘텐츠 */}
      <div className="oil-section">
              <div className="oil-item">
                <img src={fc_oil} alt="FC 전용유 제작" className="oil-image" />
                <div className="overlay">
                  <p className="overlay-text">FC 전용유 제작</p>
                </div>
              </div>
              <div className="oil-item">
                <img src={store_oil} alt="업소용 식용유" className="oil-image" />
                <div className="overlay">
                  <p className="overlay-text">업소용 식용유</p>
                </div>
              </div>
            </div>
      {/* 전국직영센터 콘텐츠 */}
      <div className="center-section">
        <div className="center-text">
          <h2 className="center-title">전국직영센터 운영으로</h2>
          <h3 className="center-subtitle">전국 어디서나 신속하고 일관된 품질</h3>
          <div className="button-group">
            <button className="center-button active">전국 일일배송</button>
            <button className="center-button">물류 네트워크</button>
            <button className="center-button">뛰어난 상품성</button>
            <button className="center-button">편리한 보관 시스템</button>
          </div>
        </div>
        <img src={truckImage} alt="트럭 이미지" className="truck-image" />
      </div>
      {/* 협력사 및 제조사 상단 멘트 */}
      <div className="partners-header">
        <img src={shinliFoodyellowImage} alt="SHINLI FOOD" className="shinli-food-yellow-img" />
        <h2 className="main-heading">주식회사 신일푸드는</h2>
        <h2 className="main-subheading">상생경영을 통해 더 큰 가치를 만들어갑니다.</h2>
      </div>
      {/* 협력사 및 제조사 섹션 */}
      <div className="partners-section">
        <h3 className="partners-title">협력사 및 제조사</h3>
        <div className="partners-grid">
          {/* Add your logos here */}
          <div className="partner-item"></div>
          <div className="partner-item"></div>
          <div className="partner-item"></div>
          <div className="partner-item"></div>
          <div className="partner-item"></div>
          <div className="partner-item"></div>
          <div className="partner-item"></div>
          <div className="partner-item"></div>
          <div className="partner-item"></div>
        </div>
      </div>


    </div>

  );
}

export default App;
