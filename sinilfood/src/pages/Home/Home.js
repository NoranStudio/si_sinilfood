import React, { useState } from "react";
import "../../assets/styles/global.css";

/*
    순서대로 Import정렬 및 각 페이지(섹션)마다 css파일이 연결되어있습니다. 
 */
import Header from "../../components/Header.js"; // 헤더
import MainBanner from "./MainBanner.js"; // 메인배너
import Slogan from "./Slogan.js"; // 슬로건
import CenterContents from "./CenterContents"; // 전국센터, 파트너
import Slider from "./Slider.js"; // 프렌차이즈
import News from "./News.js"; // 새소식
import CS from "./CS.js"; // 고객센터
import Footer from "../../components/Footer"; // 푸터

import logo from "../../assets/img/sinil_logo.png";
import navGray from "../../assets/img/nav_gray.png";

function App() {
  const [isOpenSideMenu, setOpenSideMenu] = useState(false);
  const onClickToggle = () => {
    setOpenSideMenu((prev) => !prev);
  };
  return (
    <div className="App">
      <Header isOpen={onClickToggle} />
      <MainBanner />
      <Slogan />
      <CenterContents />
      <Slider />
      <News />
      <CS />
      <Footer />
      {isOpenSideMenu && (
        <aside>
          <div className="header-contents">
            <h1>
              <a href="/">
                <img src={logo} alt="Sinilfood Logo" />
              </a>
            </h1>
            <img
              src={navGray}
              alt="nav"
              className="nav-mo"
              onClick={onClickToggle}
            />
          </div>
          <div className="aside-contents-container">
            <div className="aside-contents">
              <p className="aside-contents-title">회사소개</p>
              <div className="aside-menus">
                <p className="aside-menu">회사소개</p>
                <p className="aside-menu">CI</p>
                <p className="aside-menu">인증 및 허가증</p>
              </div>
              <div className="aside-menus">
                <p className="aside-menu">찾아오시는 길</p>
                <p className="aside-menu">연혁</p>
                <p className="aside-menu">조직도</p>
              </div>
            </div>
            <div className="aside-contents">
              <p className="aside-contents-title">사업영역</p>
              <div className="aside-menus">
                <p className="aside-menu">전용유 제작</p>
                <p className="aside-menu">식용유 종류</p>
                <p className="aside-menu">신재생에너지 사업</p>
              </div>
              <div className="aside-menus">
                <p className="aside-menu">제조사 현황</p>
                <p className="aside-menu">신일푸드 물류시스템</p>
              </div>
            </div>
            <div className="aside-contents">
              <p className="aside-contents-title">제품소개</p>
              <div className="aside-menus">
                <p className="aside-menu">자사전용유 | 일반유</p>
                <p className="aside-menu">프랜차이즈 전용유</p>
              </div>
            </div>
            <div className="aside-contents">
              <p className="aside-contents-title">고객서비스</p>
              <div className="aside-menus">
                <p className="aside-menu">식용유 종류</p>
                <p className="aside-menu">신재생에너지 사업</p>
              </div>
              <div className="aside-menus">
                <p className="aside-menu">제조사 현황</p>
                <p className="aside-menu">신일푸드 물류시스템</p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

export default App;
