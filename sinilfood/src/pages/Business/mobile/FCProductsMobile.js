import React, { useState } from 'react';
import './FCProductsMobile.css';
import BusinessNavbarMobile from '../../../components/business/mobile/BusinessNavbarMobile';
import NavbarMobile from '../../../components/mobile/NavbarMobile';

// 모바일 버전 컴포넌트들
import ManufacturingMobile from '../../../components/business/mobile/ManufacturingMobile';
import OilTypesMobile from '../../../components/business/mobile/OilTypesMobile';
import RenewableEnergyMobile from '../../../components/business/mobile/RenewableEnergyMobile';
import ManufacturersMobile from '../../../components/business/mobile/ManufacturersMobile';
import LogisticsMobile from '../../../components/business/mobile/LogisticsMobile';

function FCProductsMobile() {
    const [activeTab, setActiveTab] = useState('manufacturing');

    const renderContent = () => {
        switch (activeTab) {
            case 'manufacturing':
                return <ManufacturingMobile />;
            case 'types':
                return <OilTypesMobile />;
            case 'renewable':
                return <RenewableEnergyMobile />;
            case 'manufacturers':
                return <ManufacturersMobile />;
            case 'logistics':
                return <LogisticsMobile />;
            default:
                return <ManufacturingMobile />;
        }
    };

    return (
        <div className="business-wrapper-mobile">
            <div className="business-banner-mobile">
                <div className="banner-top-mobile">
                    <NavbarMobile />
                </div>
                <div className="business-content-mobile">
                    <p className="light-text">프랜차이즈를 위한</p>
                    <p className="bold-text">맞춤형 전용유 제조 및 배송</p>
                </div>
            </div>
            <BusinessNavbarMobile activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderContent()}
        </div>
    );
}

export default FCProductsMobile;
