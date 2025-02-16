import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/sinil_logo.png';
import '../assets/styles/navbar.css';

function Navbar() {
    return (
        <div className="nav-wrapper">
            <div className="nav-container">
                <div className="logo-container">
                    <img src={logo} alt="Sinilfood Logo" />
                </div>

                <nav className="navbar">
                    <ul className="nav-menu">
                        <li>
                            <Link to="/about">회사소개</Link>
                        </li>
                        <li>
                            <Link to="/business/fc-products">사업영역</Link>
                        </li>
                        <li>
                            <Link to="/products">제품소개</Link>
                        </li>
                        <li>
                            <Link to="/services">고객서비스</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
