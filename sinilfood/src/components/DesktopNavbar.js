import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/sinil_logo.png';
import './DesktopNavbar.css';

function DesktopNavbar() {
    const location = useLocation();

    return (
        <div className="nav-wrapper">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Sinilfood Logo" />
                </Link>
            </div>

            <nav className="navbar">
                <ul className="nav-list">
                    <li>
                        <a href="#about" className={location.hash === '#about' ? 'active' : ''}>
                            회사소개
                        </a>
                    </li>
                    <li>
                        <Link
                            to="/business/fc-products"
                            className={location.pathname.includes('business') ? 'active' : ''}
                        >
                            사업영역
                        </Link>
                    </li>
                    <li>
                        <a href="#products" className={location.hash === '#products' ? 'active' : ''}>
                            제품소개
                        </a>
                    </li>
                    <li>
                        <a href="#services" className={location.hash === '#services' ? 'active' : ''}>
                            고객서비스
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default DesktopNavbar;
