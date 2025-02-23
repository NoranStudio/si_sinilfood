import React from "react";
import "../assets/styles/footer.css"; // 전역 스타일 가져오기
import logo from "../assets/img/sinil_logo.png"; // 로고 이미지 경로 수정

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contents">
        <div className="left">
          <img src={logo} alt="신일푸드 로고" className="footer-logo" />
          <div className="left-contents">
            <div>
              <p>주소 | 경상남도 김해시 생림면 상동로 78-63</p>
              <p>대표번호 | 055&#41; 334-7789</p>
            </div>
            <p>Copyright@ 2024 (주)신일푸드. All right reserved.</p>
          </div>
        </div>
        <div className="right">
          <a href="#none">회사소개</a>
          <a href="#none">사업영역</a>
          <a href="#none">제품소개</a>
          <a href="#none">고객서비스</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
