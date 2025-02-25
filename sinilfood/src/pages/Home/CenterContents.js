import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Partners from "./Partners"; // 파트너섹션

import truckImage1 from "../../assets/img/center/truck.png";
import truckImage2 from "../../assets/img/center/network.png";
import truckImage3 from "../../assets/img/center/product.png";
import truckImage4 from "../../assets/img/center/good_system.png";
import logo from "../../assets/img/center/logo.png";

import "swiper/css";
import "../../assets/styles/global.css";
import "../../assets/styles/center.css";

function CenterContents() {
  const [activeContent, setActiveContent] = useState(0);
  const swiperRef = useRef(null);

  // 슬라이드 데이터
  const slides = [
    {
      id: 1,
      title: "전국 일일배송",
      subtitle: "전국 어디서나 신속하고 일관된 품질",
      image: truckImage1,
    },
    {
      id: 2,
      title: "물류 네트워크",
      subtitle: "전국 어디서나 신속하고 일관된 품질",
      image: truckImage2,
    },
    {
      id: 3,
      title: "뛰어난 상품성",
      subtitle: "전국 어디서나 신속하고 일관된 품질",
      image: truckImage3,
    },
    {
      id: 4,
      title: "편리한 보관 시스템",
      subtitle: "전국 어디서나 신속하고 일관된 품질",
      image: truckImage4,
    },
  ];

  // 버튼 클릭 시 해당 슬라이드로 이동
  const handleButtonClick = (index) => {
    setActiveContent(index);
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className="center-container">
      <div className="center-section">
        <div className="center-contents">
          <div className="center-text">
            <h2 className="center-title">
              전국직영센터 운영
              <span className="normal-text">으로</span>
            </h2>
            <h3 className="center-subtitle">
              {slides[activeContent].subtitle}
            </h3>
            <div className="button-group">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  className={`center-button ${
                    activeContent === index ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick(index)}
                >
                  {slide.title}
                </button>
              ))}
            </div>
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="truck-image-container">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveContent(swiper.activeIndex)}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.title}>
                <img src={slide.image} alt={slide.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Partners />
    </div>
  );
}

export default CenterContents;
