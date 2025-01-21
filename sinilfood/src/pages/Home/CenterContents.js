import React, { useState } from "react";
import truckImage1 from "../../assets/img/center/truck.png";
import truckImage2 from "../../assets/img/center/network.png";
import truckImage3 from "../../assets/img/center/product.png";
import truckImage4 from "../../assets/img/center/good_system.png";
import "../../assets/styles/global.css";
import "../../assets/styles/center.css";

function CenterContents() {
  const [activeContent, setActiveContent] = useState(0); // 현재 활성화된 콘텐츠의 인덱스 관리

  // 슬라이드 데이터
  const slides = [
    {
      title: "전국 일일배송",
      subtitle: "전국 어디서나 신속하고 일관된 품질",
      image: truckImage1,
    },
    {
      title: "물류 네트워크",
      subtitle: "전국 어디서나 신속하고 일관된 품질",
      image: truckImage2,
    },
    {
      title: "뛰어난 상품성",
      subtitle: "전국 어디서나 신속하고 일관된 품질",
      image: truckImage3,
    },
    {
      title: "편리한 보관 시스템",
      subtitle: "전국 어디서나 신속하고 일관된 품질",
      image: truckImage4,
    },
  ];

  // 버튼 클릭 시 활성화된 콘텐츠 변경
  const handleButtonClick = (index) => {
    setActiveContent(index);
  };

  return (
    <div className="center-section">
      <div className="center-text">
        <h2 className="center-title">
            전국직영센터 운영
            <span className="normal-text">으로</span>
        </h2>
        <h3 className="center-subtitle">{slides[activeContent].subtitle}</h3>
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
      <img
        src={slides[activeContent].image}
        alt="트럭 이미지"
        className="truck-image"
      />
    </div>
  );
}

export default CenterContents;
