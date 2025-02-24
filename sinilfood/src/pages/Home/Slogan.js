import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "../../assets/styles/slogan.css";

import sloganMainBanner1 from "../../assets/img/slogan-main1.png";
import sloganMainBanner2 from "../../assets/img/slogan-main2.png";
import sloganSubBanner1 from "../../assets/img/slogan-sub1.png";
import sloganSubBanner2 from "../../assets/img/slogan-sub2.png";
import Arrow from "../../assets/img/slogan-arrow.png";

const Slogan = () => {
  const swiper1Ref = useRef(null); // 첫 번째 Swiper : 메인
  const swiper2Ref = useRef(null); // 두 번째 Swiper : 서브

  const handleNext = () => {
    swiper1Ref.current?.slideNext();
    swiper2Ref.current?.slideNext();
  };

  return (
    <div className="slogan-section">
      <p className="slogan-title">
        <b>안전하고 품질 높은 제품</b>으로
        <br />
        <b className="yellow">
          외식산업에 최적화된
          <br className="mo-br" /> 유통 서비스
        </b>
        를 선보입니다.
      </p>
      <p className="slogan-description">
        신일푸드는 고객의 안전과 건강을 지키기 위해,
        <br />
        엄선된 품질과 철저한 관리를 바탕으로 최상의 <br className="mo-br" />
        제품만을 제공합니다.
      </p>
      <div className="slogan-contents-wrapper">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => (swiper1Ref.current = swiper)}
        >
          <SwiperSlide>
            <img src={sloganMainBanner1} alt="메인배너1" />
            <div className="slogan-banner-contents">
              <div className="textbox">
                <p className="slogan-banner-title">FC 전용유 제작</p>
                <p className="slogan-banner-description">
                  프랜차이즈 전용 FC 식용유
                  <br />
                  일관된 맛과 품질로 고객에게 늘 한결같은 맛을 제공하세요
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sloganMainBanner2} alt="메인배너2" />
            <div className="slogan-banner-contents">
              <div className="textbox">
                <p className="slogan-banner-title">업소용 식용유</p>
                <p className="slogan-banner-description">
                  업소 전용 프리미엄 식용유
                  <br />
                  고온에서도 안정적인 품질로 튀김의 바삭함과 풍미를 오래
                  유지합니다
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => (swiper2Ref.current = swiper)}
          className="slogan-subbanner"
        >
          <SwiperSlide>
            <img src={sloganSubBanner1} alt="서브배너1" />
            <div className="slogan-banner-contents"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sloganSubBanner2} alt="서브배너2" />
            <div className="slogan-banner-contents"></div>
          </SwiperSlide>
        </Swiper>
        <div className="sloganbanner-navigation">
          <img src={Arrow} alt="arrow" onClick={handleNext} />
        </div>
      </div>
      <div className="slogan-contents-wrapper-mo">
        <div className="contents">
          <img src={sloganMainBanner1} alt="메인배너1" />
          <div className="contents-text">
            <p className="title">FC 전용유 제작</p>
            <p className="slogan-contents-mo-description">
              프랜차이즈 전용 FC 식용유
              <br />
              일관된 맛과 품질로 고객에게
              <br />늘 한결같은 맛을 제공하세요
            </p>
          </div>
        </div>
        <div className="contents">
          <img src={sloganMainBanner2} alt="메인배너2" />
          <div className="contents-text">
            <p className="title">업소용 식용유</p>
            <p className="slogan-contents-mo-description">
              업소 전용 프리미엄 식용유
              <br />
              고온에서도 안정적인 품질로 튀김의 바삭함과
              <br />
              풍미를 오래 유지합니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
