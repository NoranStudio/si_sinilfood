//프랜차이즈 로고 블러 이미지
import franchise1Logo from '../../assets/img/franchise/franchise1.png';
import franchise2Logo from '../../assets/img/franchise/franchise2.png';
import franchise3Logo from '../../assets/img/franchise/franchise3.png';
import franchise4Logo from '../../assets/img/franchise/franchise4.png';
import franchise5Logo from '../../assets/img/franchise/franchise5.png';


import React, { useEffect, useRef } from "react";

function FranchiseSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slideInterval = setInterval(() => {
      if (slider) {
        scrollAmount += slider.offsetWidth / 5; // 한 번에 이동할 거리
        if (scrollAmount >= slider.scrollWidth) {
          scrollAmount = 0; // 다시 처음으로 이동
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth", // 부드럽게 스크롤
        });
      }
    }, 1000); // 1초 간격

    return () => clearInterval(slideInterval); // 컴포넌트 언마운트 시 인터벌 제거
  }, []);

  return (
    <div className="franchise-section">
      <h3 className="partners-title">프랜차이즈 물류업체</h3>
      <div className="franchise-slider" ref={sliderRef}>
        <div className="franchise-item"><img src={franchise1Logo} alt="프랜차이즈 1" /></div>
        <div className="franchise-item"><img src={franchise2Logo} alt="프랜차이즈 2" /></div>
        <div className="franchise-item"><img src={franchise3Logo} alt="프랜차이즈 3" /></div>
        <div className="franchise-item"><img src={franchise4Logo} alt="프랜차이즈 4" /></div>
        <div className="franchise-item"><img src={franchise5Logo} alt="프랜차이즈 5" /></div>
      </div>
    </div>
  );
}

export default FranchiseSlider;
