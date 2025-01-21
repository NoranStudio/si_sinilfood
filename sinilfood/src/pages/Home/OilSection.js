import React, { useState } from "react";
import fc_oil from "../../assets/img/fc_oil.png";
import store_oil from "../../assets/img/store_oil.png";
import fc_oil_next from "../../assets/img/fc_oil_next.png";
import store_oil_next from "../../assets/img/store_oil_next.png";
import fc_oil_description from "../../assets/img/fc_oil_description.png";
import store_oil_description from "../../assets/img/store_oil_description.png";
import fc_oil_title from "../../assets/img/fc_oil_title.png";
import store_oil_title from "../../assets/img/store_oil_title.png";
import oil_arrow from "../../assets/img/arrow.png";
import "../../assets/styles/global.css";

function OilSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [descriptionImage, setDescriptionImage] = useState(fc_oil_description);
  const [titleImage, setTitleImage] = useState(fc_oil_title);

  const slides = [
    {
      mainImage: fc_oil,
      nextImage: fc_oil_next,
      descriptionImage: fc_oil_description,
      titleImage: fc_oil_title,
      description: "",
    },
    {
      mainImage: store_oil,
      nextImage: store_oil_next,
      descriptionImage: store_oil_description,
      titleImage: store_oil_title,
      description: "",
    },
  ];

  const handleNextSlide = () => {
    // 페이드 아웃 시작
    setIsFading(true);

    setTimeout(() => {
      // 슬라이드 변경
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);

      // 새로운 이미지로 업데이트
      setDescriptionImage(slides[nextSlide].descriptionImage);
      setTitleImage(slides[nextSlide].titleImage);

      // 페이드 인 시작
      setIsFading(false);
    }, 500); // CSS transition 시간과 맞춤
  };

  return (
    <div className="oil-section">
      <div className="oil-item">
        <div className="image-wrapper">
          <img
            src={slides[currentSlide].mainImage}
            alt="메인 이미지"
            className={`oil-image ${isFading ? "fade-out" : "fade-in"}`}
          />
          <img
            src={descriptionImage}
            alt="설명 이미지"
            className={`overlay-image description ${isFading ? "fade-out" : "fade-in"}`}
          />
          <img
            src={titleImage}
            alt="타이틀 이미지"
            className={`overlay-image title ${isFading ? "fade-out" : "fade-in"}`}
          />
        </div>
        <button className="arrow-button" onClick={handleNextSlide}>
          <img src={oil_arrow} alt="화살표 버튼" className="arrow-image" />
        </button>
        <div
          className={`overlay ${isFading ? "fade-to-dark" : ""}`}
        ></div>
      </div>
      <div className="oil-item">
        <img
          src={slides[currentSlide].nextImage}
          alt="다음 이미지"
          className={`oil-next-image ${isFading ? "fade-out" : "fade-in"}`}
        />
        <div
          className={`overlay ${isFading ? "fade-to-dark" : ""}`}
        >
          <p className={`overlay-text ${isFading ? "fade-out" : "fade-in"}`}>
            {slides[currentSlide].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OilSection;
