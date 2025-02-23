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
import Slogan from "./Slogan.js";

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <Slogan />
      <CenterContents />
      <Slider />
      <News />
      <CS />
      <Footer />
    </div>
  );
}

export default App;
