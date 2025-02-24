import React, { useState } from 'react';
import './FCProducts.css';
import DesktopNavbar from '../../components/DesktopNavbar';
import BusinessNavbarDesktop from '../../components/business/BusinessNavbarDesktop';

// 데스크톱 버전 컴포넌트
import Manufacturing from '../../components/business/Manufacturing';
import OilTypes from '../../components/business/OilTypes';
import RenewableEnergy from '../../components/business/RenewableEnergy';
import Manufacturers from '../../components/business/Manufacturers';
import Logistics from '../../components/business/Logistics';
import businessBanner from '../../assets/img/business/business_banner.png';
import businessBannerLogistics from '../../assets/img/business/business_banner_logistics.png';

function FCProductsDesktop() {
    const [activeTab, setActiveTab] = useState('manufacturing');

    // 배너 이미지 선택 로직
    const bannerImage = activeTab === 'logistics' ? businessBannerLogistics : businessBanner;

    const renderContent = () => {
        switch (activeTab) {
            case 'manufacturing':
                return <Manufacturing />;
            case 'types':
                return <OilTypes />;
            case 'renewable':
                return <RenewableEnergy />;
            case 'manufacturers':
                return <Manufacturers />;
            case 'logistics':
                return <Logistics />;
            default:
                return <Manufacturing />;
        }
    };

    return (
        <div className="business-wrapper">
            <div className="business-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="business-container">
                    <DesktopNavbar />
                    <div className="business-content">
                        <div className="banner-title">
                            <p className="light-text">프랜차이즈를 위한</p>
                            <p className="bold-text">맞춤형 전용유 제조 및 배송</p>
                        </div>
                    </div>
                </div>
            </div>
            <BusinessNavbarDesktop activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderContent()}
        </div>
    );
}

export default FCProductsDesktop;
