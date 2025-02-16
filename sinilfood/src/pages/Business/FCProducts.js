import React, { useState } from 'react';
import './FCProducts.css';
import Navbar from '../../components/Navbar';
import BusinessNavbar from '../../components/business/BusinessNavbar';

function FCProducts() {
    const [activeTab, setActiveTab] = useState('manufacturing');

    return (
        <div className="business-wrapper">
            <div className="business-banner">
                <div className="business-container">
                    <Navbar />
                    <div className="business-content">
                        <div className="banner-title">
                            <p className="light-text">프랜차이즈를 위한</p>
                            <p className="bold-text">맞춤형 전용유 제조 및 배송</p>
                        </div>
                    </div>
                </div>
            </div>
            <BusinessNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    );
}

export default FCProducts;
