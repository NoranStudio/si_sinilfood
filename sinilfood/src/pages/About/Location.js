import React, { useState } from "react";
import { ReactComponent as ArrowRightIcon } from "../../assets/img/arrow-right.svg";
import "../../assets/styles/about/about-location.css";

const Location = () => {
  const [activate, setActivate] = useState("kakao");

  return (
    <div className="about__location">
      <div className="about__location__title">
        <h1>(주)신일푸드 오시는 길</h1>
        <div className="about__location__tab">
          <div
            className={activate === "kakao" ? "active" : ""}
            onClick={() => setActivate("kakao")}
          >
            (주)신일푸드 <span>화성지점</span>
          </div>
          <div
            className={activate === "naver" ? "active" : ""}
            onClick={() => setActivate("naver")}
          >
            (주)신일푸드 <span>본점</span>
          </div>
        </div>
      </div>
      <div className="about__location__map" />
      <div className="about__location__links">
        <a className="about__location__link" href="https://map.kakao.com/">
          카카오 맵<span>KAKAO MAP</span>
          <ArrowRightIcon />
        </a>
        <a className="about__location__link" href="https://map.naver.com/">
          네이버 맵<span>NAVER MAP</span>
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
};

export default Location;
