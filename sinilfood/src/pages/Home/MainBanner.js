import React, { useRef, useState } from "react";
import shinliFoodImage from "../../assets/img/SHINLI FOOD white.png"; // SHINLI FOOD 이미지
import phoneIcon from "../../assets/img/phone.png";
import headsetIcon from "../../assets/img/headset.png";
import bannerImg1 from "../../assets/img/mainbanner1.png";
import bannerImg2 from "../../assets/img/mainbanner2.png";
import bannerImg3 from "../../assets/img/mainbanner3.png";
import scrollDown from "../../assets/img/scroll-down.png";
import "../../assets/styles/mainbanner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const MainBanner = () => {
  const swiperRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="banner-section">
      <div className="banner-contents">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentPage(swiper.realIndex + 1)}
        >
          <SwiperSlide>
            <img src={bannerImg1} alt="배너이미지" className="banner-img" />
            <div className="banner-texts">
              <img src={shinliFoodImage} alt="신일푸드" />
              <p className="banner-title">
                식용유 및 식품 유통 <br />
                전문기업 <b>신일푸드</b>
              </p>
              <p className="banner-description">
                <b>신일푸드</b> 만의 독자적인 전용 물류 시스템으로 <br />
                전국적 유통 체인망이 구축되어 있습니다.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={bannerImg2} alt="배너이미지" className="banner-img" />
            <div className="banner-texts">
              <img src={shinliFoodImage} alt="신일푸드" />
              <p className="banner-title">
                외식산업의 유지유통 <br />
                선도기업 <b>신일푸드</b>
              </p>
              <p className="banner-description">
                깨끗하고 믿을 수 있는 식용유 및 푸드 유통기업 <br />
                신뢰와 품질을 보장하는 <b>신일푸드</b>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={bannerImg3} alt="배너이미지" className="banner-img" />
            <div className="banner-texts">
              <img src={shinliFoodImage} alt="신일푸드" />
              <p className="banner-title">
                국내 외식산업의 미래와 <br />
                함께하는 <b>신일푸드</b>
              </p>
              <p className="banner-description">
                국내 외식산업의 성장과 함께, 풍부한 경험과 <br />
                독보적인 경쟁력으로 미래를 열어갑니다.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mainbanner-navigation">
        <HiOutlineArrowNarrowLeft
          onClick={() => swiperRef.current?.slidePrev()}
        />{" "}
        <b>{currentPage.toString().padStart(2, "0")}</b> <p>03</p>
        <HiOutlineArrowNarrowRight
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>

      <img
        src={scrollDown}
        alt="스크롤다운이미지"
        className="scroll-down-img"
      />

      {/* 우측 사이드 버튼 */}
      <div className="side-buttons">
        <a href="#contact" className="contact-button">
          <img src={phoneIcon} alt="Phone Icon" className="icon-image" />
        </a>
        <a href="#contact" className="contact-button">
          <img src={headsetIcon} alt="Headset Icon" className="icon-image" />
        </a>
      </div>
    </div>
  );
};

export default MainBanner;
