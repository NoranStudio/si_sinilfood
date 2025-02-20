import React from 'react';
import logo from '../../assets/img/sinil_logo.png';
import menuButton from '../../assets/img/business/mobile/menubutton_mobile.png';
import './NavbarMobile.css';

function NavbarMobile() {
    return (
        <div className="navbar-mobile">
            <div className="logo-container-mobile">
                <img src={logo} alt="신일푸드 로고" />
            </div>
            <div className="menu-icon-mobile">
                <img src={menuButton} alt="메뉴 버튼" />
            </div>
        </div>
    );
}

export default NavbarMobile;
