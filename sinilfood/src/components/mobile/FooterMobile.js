import React from 'react';
import './FooterMobile.css';
import logo from '../../assets/img/sinil_logo.png';

function FooterMobile() {
    return (
        <footer className="footer-mobile">
            <div className="footer-content-mobile">
                <div className="footer-left-mobile">
                    <div>
                        <img src={logo} alt="신일푸드 로고" className="footer-logo-mobile" />
                    </div>
                    <div className="footer-info-mobile">
                        <p className="address">주소 | 경상남도 김해시 생림면 상동로 78-63</p>
                        <p className="phone">대표번호 | 055) 334-7789</p>
                        <p className="copyright">Copyright@ 2024 (주)신일푸드. All right reserved.</p>
                    </div>
                </div>
                <div className="footer-links-mobile">
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
            </div>
        </footer>
    );
}

export default FooterMobile;
