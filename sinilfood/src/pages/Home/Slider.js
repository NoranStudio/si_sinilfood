import { Swiper, SwiperSlide } from "swiper/react";

import franchise1Logo from "../../assets/img/franchise/franchise1.png";
import franchise2Logo from "../../assets/img/franchise/franchise2.png";
import franchise3Logo from "../../assets/img/franchise/franchise3.png";
import franchise4Logo from "../../assets/img/franchise/franchise4.png";
import franchise5Logo from "../../assets/img/franchise/franchise5.png";
import franchise6Logo from "../../assets/img/franchise/franchise6.png";
import franchise7Logo from "../../assets/img/franchise/franchise7.png";
import franchise8Logo from "../../assets/img/franchise/franchise8.png";
import franchise9Logo from "../../assets/img/franchise/franchise9.png";
import franchise10Logo from "../../assets/img/franchise/franchise10.png";
import franchise11Logo from "../../assets/img/franchise/franchise11.png";
import franchise12Logo from "../../assets/img/franchise/franchise12.png";
import franchise13Logo from "../../assets/img/franchise/franchise13.png";
import franchise14Logo from "../../assets/img/franchise/franchise14.png";
import franchise15Logo from "../../assets/img/franchise/franchise15.png";
import franchise16Logo from "../../assets/img/franchise/franchise16.png";
import franchise17Logo from "../../assets/img/franchise/franchise17.png";
import franchise18Logo from "../../assets/img/franchise/franchise18.png";
import franchise19Logo from "../../assets/img/franchise/franchise19.png";
import franchise20Logo from "../../assets/img/franchise/franchise20.png";
import franchise21Logo from "../../assets/img/franchise/franchise21.png";
import franchise22Logo from "../../assets/img/franchise/franchise22.png";
import franchise23Logo from "../../assets/img/franchise/franchise23.png";
import franchise24Logo from "../../assets/img/franchise/franchise24.png";
import franchise25Logo from "../../assets/img/franchise/franchise25.png";
import franchise26Logo from "../../assets/img/franchise/franchise26.png";
import franchise27Logo from "../../assets/img/franchise/franchise27.png";
import franchise28Logo from "../../assets/img/franchise/franchise28.png";

import "swiper/css";
import "../../assets/styles/slider.css";

const Slider = () => {
  return (
    <div className="slider-section">
      <h3>프랜차이즈 물류업체</h3>
      <Swiper
        breakpoints={{
          768: { spaceBetween: 24 },
          480: { spaceBetween: 5 },
          0: { spaceBetween: 5 },
        }}
        slidesPerView="auto"
      >
        <SwiperSlide className="hover">
          <img src={franchise1Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise2Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise3Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise4Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise5Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise6Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise7Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise8Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise9Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise10Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise11Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise12Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise13Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise14Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise15Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise16Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise17Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise18Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise19Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise20Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise21Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise22Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise23Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise24Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise25Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise26Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise27Logo} alt="프랜차이즈" />
        </SwiperSlide>
        <SwiperSlide className="hover">
          <img src={franchise28Logo} alt="프랜차이즈" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
