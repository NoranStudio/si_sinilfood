import React from "react";
import "../assets/styles/footer.css"; // 전역 스타일 가져오기
import logo from "../assets/img/sinil_logo.png"; // 로고 이미지 경로 수정
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__links">
          <img src={logo} alt="신일푸드 로고" className="footer__logo" />
          <ul>
            <li>
              <Link href="/about">회사소개</Link>
            </li>
            <li>
              <Link href="/business">사업영역</Link>
            </li>
            <li>
              <Link href="/products">제품소개</Link>
            </li>
            <li>
              <Link href="/services">고객서비스</Link>
            </li>
          </ul>
        </div>
        <div class="footer__info">
          <p>
            주소 | 경상남도 김해시 생림면 상동로 78-63 &nbsp;&nbsp; 대표번호 |
            055) 334-7789
          </p>
          <p>Copyright© 2024 (주)신일푸드. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
