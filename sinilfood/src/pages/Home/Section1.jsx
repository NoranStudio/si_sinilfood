import React from "react";
import logo from "../../assets/img/sinil_logo.png";
import shinliFoodImage from "../../assets/img/SHINLI FOOD white.png"; // SHINLI FOOD 이미지
import phoneIcon from "../../assets/img/phone.png";
import headsetIcon from "../../assets/img/headset.png";
import banner from "../../assets/img/banner.png";

const Section1 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 950,
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1920px auto",
        backgroundPosition: "center",
        position: "relative",
        minWidth: 1440,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          width: 1440,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            height: 150,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="Sinilfood Logo" />
          </div>

          <nav className="navbar" style={{ display: "flex", flex: 2 }}>
            <ul
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                gap: "50px",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <li>
                <a href="#about">회사소개</a>
              </li>
              <li>
                <a href="#business">사업영역</a>
              </li>
              <li>
                <a href="#products">제품소개</a>
              </li>
              <li>
                <a href="#services">고객서비스</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="main-content" style={{ flex: 1, display: "flex" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // alignItems: "center",
              // backgroundColor: "#0fa",
            }}
          >
            <div
              style={{
                width: 400,
                //   backgroundColor: "#cca",
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "start",
              }}
            >
              <img
                src={shinliFoodImage}
                alt="SHINLI FOOD"
              //   className="shinli-food-img"
              />
              <h1>식용유 및 식품 유통</h1>
              <h1>
                전문기업 <span>신일푸드</span>
              </h1>
              <p>
                <strong>신일푸드</strong> 만의 독자적인 전용 물류 시스템으로
                전국적 유통 체인망이 구축되어 있습니다.
              </p>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "end",
              // backgroundColor: "#9a8",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a href="#contact">
                <img src={phoneIcon} alt="Phone Icon" />
              </a>
              <a href="#contact">
                <img
                  src={headsetIcon}
                  alt="Headset Icon"

                />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="logo">
        <img src={logo} alt="Sinilfood Logo" />
      </div> */}

        {/* 네비게이션 바 */}
        {/* <nav className="navbar">
        <ul>
          <li className="nav-item company">
            <a href="#about">회사소개</a>
          </li>
          <li className="nav-item business">
            <a href="#business">사업영역</a>
          </li>
          <li className="nav-item product">
            <a href="#products">제품소개</a>
          </li>
          <li className="nav-item service">
            <a href="#services">고객서비스</a>
          </li>
        </ul>
      </nav> */}

        {/* SHINLI FOOD 이미지 */}
        {/* <img
        src={shinliFoodImage}
        alt="SHINLI FOOD"
        className="shinli-food-img"
      /> */}

        {/* 배너 텍스트 배치 */}
        {/* <h1 className="title-large">식용유 및 식품 유통</h1>
      <h1 className="title-large">
        전문기업 <span className="highlight">신일푸드</span>
      </h1>
      <p className="description">
        <strong>신일푸드</strong> 만의 독자적인 전용 물류 시스템으로 전국적 유통
        체인망이 구축되어 있습니다.
      </p> */}

        {/* 우측 사이드 버튼 */}
        {/* <div className="side-buttons">
        <a href="#contact" className="contact-button">
          <img src={phoneIcon} alt="Phone Icon" className="icon-image" />
        </a>
        <a href="#contact" className="contact-button">
          <img src={headsetIcon} alt="Headset Icon" className="icon-image" />
        </a>
      </div> */}
      </div>
    </div>
  );
};

export default Section1;
