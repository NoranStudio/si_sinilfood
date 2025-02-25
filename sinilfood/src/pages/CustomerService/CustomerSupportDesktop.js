import React, { useState } from 'react';
import './CustomerSupport.css';
import DesktopNavbar from '../../components/DesktopNavbar';
import CustomerNavbarDesktop from '../../components/customer/CustomerNavbarDesktop';

// 데스크톱 버전 컴포넌트
import CustomerService from '../../components/customer/CustomerService';
import News from '../../components/customer/News';
import Board from '../../components/customer/Board';
import customerBanner from '../../assets/img/customer/customer_banner.png';

function CustomerSupportDesktop() {
    const [activeTab, setActiveTab] = useState('customer-service');

    // 배너 이미지 선택 로직
    const bannerImage = customerBanner;

    const renderContent = () => {
        switch (activeTab) {
            case 'customer-service':
                return <CustomerService />;
            case 'news':
                return <News />;
            case 'board':
                return <Board />;
            default:
                return <CustomerService />;
        }
    };

    return (
        <div className="customer-wrapper">
            <div className="customer-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="customer-container">
                    <DesktopNavbar />
                    <div className="customer-content">
                        <div className="banner-title">
                            <p className="light-text">신뢰와 소통의 중심</p>
                            <p>
                                <span className="light-text">신일푸드 </span>
                                <span className="bold-text">고객센터</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <CustomerNavbarDesktop activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderContent()}
        </div>
    );
}

export default CustomerSupportDesktop;
