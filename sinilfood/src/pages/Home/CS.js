import React from "react";
import counsel_image from "../../assets/img/counsel_image.png";

import "../../assets/styles/cs.css";

const CS = () => {
  return (
    <div className="cs-section">
      <div className="cs-contents">
        <h2>
          협력사 사업문의 <b>상담센터</b>
        </h2>
        <p className="cs-description">
          신일푸드는 함께 성장할 파트너사들을 기다립니다. <br />
          식용유 구매와 제조관련 상담문의를 남겨주세요.
        </p>
        <button className="cs-button">
          온라인 상담문의
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="22"
            viewBox="0 0 12 22"
            fill="none"
            className="arrow-svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.414002 20.9111C0.948548 21.4501 1.81037 21.4501 2.34491 20.9111L11.4104 11.7701C11.8358 11.3411 11.8358 10.6481 11.4104 10.2191L2.34491 1.07808C1.81037 0.539078 0.948548 0.539078 0.414002 1.07808C-0.120543 1.61708 -0.120543 2.48608 0.414002 3.02508L8.31218 11.0001L0.403093 18.9751C-0.120544 19.5031 -0.120543 20.3831 0.414002 20.9111Z"
              fill="white"
            />
          </svg>
        </button>
        <p className="cs-info">
          평일 AM 09:00 - PM 17:00 <br />
          <b>055. 334. 7789</b>
        </p>
      </div>
      <div className="cs-image">
        <img src={counsel_image} alt="상담 이미지" />
      </div>
    </div>
  );
};

export default CS;
