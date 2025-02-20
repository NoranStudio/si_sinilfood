import React from 'react';
import '../assets/styles/footer.css'; // 전역 스타일 가져오기
import logo from '../assets/img/sinil_logo.png'; // 로고 이미지 경로 수정

function FooterDesktop() {
    return (
        <footer class="footer">
            <div class="footer-content">
                <div>
                    <img src={logo} alt="신일푸드 로고" className="footer-logo" />
                </div>
                <div class="footer-links">
                    <ul>
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
                </div>
                <div class="footer-info">
                    <p>주소 | 경상남도 김해시 생림면 상동로 78-63 &nbsp;&nbsp; 대표번호 | 055) 334-7789</p>
                    <p>Copyright© 2024 (주)신일푸드. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default FooterDesktop;
