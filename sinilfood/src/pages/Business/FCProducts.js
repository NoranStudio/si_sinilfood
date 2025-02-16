import React, { useState } from 'react';
import './FCProducts.css';
import Navbar from '../../components/Navbar';
import BusinessNavbar from '../../components/business/BusinessNavbar';
import Manufacturing from '../../components/business/Manufacturing';
import OilTypes from '../../components/business/OilTypes';
import RenewableEnergy from '../../components/business/RenewableEnergy';
import Manufacturers from '../../components/business/Manufacturers';
import Logistics from '../../components/business/Logistics';

function FCProducts() {
    const [activeTab, setActiveTab] = useState('manufacturing');

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
                return null;
        }
    };

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
            {renderContent()}
        </div>
    );
}

export default FCProducts;
