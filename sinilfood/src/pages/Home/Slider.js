import franchise1Logo from "../../assets/img/franchise/franchise1.png";
import franchise2Logo from "../../assets/img/franchise/franchise2.png";
import franchise3Logo from "../../assets/img/franchise/franchise3.png";
import franchise4Logo from "../../assets/img/franchise/franchise4.png";
import franchise5Logo from "../../assets/img/franchise/franchise5.png";

import "../../assets/styles/slider.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Slider = () => {
  return (
    <div className="slider-section">
      <h3>프랜차이즈 물류업체</h3>
      <Swiper
        spaceBetween={24}
        slidesPerView="auto"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={franchise1Logo} alt="프랜차이즈 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={franchise2Logo} alt="프랜차이즈 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={franchise3Logo} alt="프랜차이즈 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={franchise4Logo} alt="프랜차이즈 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={franchise5Logo} alt="프랜차이즈 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={franchise1Logo} alt="프랜차이즈 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={franchise2Logo} alt="프랜차이즈 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={franchise3Logo} alt="프랜차이즈 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={franchise4Logo} alt="프랜차이즈 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={franchise5Logo} alt="프랜차이즈 5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
