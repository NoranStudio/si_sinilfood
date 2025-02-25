import React, { useState } from 'react';
import './CustomerSupportMobile.css';
import NavbarMobile from '../../../components/mobile/NavbarMobile';
import CustomerNavbarMobile from '../../../components/customer/mobile/CustomerNavbarMobile';
import CustomerServiceMobile from '../../../components/customer/mobile/CustomerServiceMobile';
import NewsMobile from '../../../components/customer/mobile/NewsMobile';
import BoardMobile from '../../../components/customer/mobile/BoardMobile';

function CustomerSupportMobile() {
    const [activeTab, setActiveTab] = useState('customer-service');

    const renderContent = () => {
        switch (activeTab) {
            case 'customer-service':
                return <CustomerServiceMobile />;
            case 'news':
                return <NewsMobile />;
            case 'board':
                return <BoardMobile />;
            default:
                return <CustomerServiceMobile />;
        }
    };

    return (
        <div className="customer-wrapper-mobile">
            <div className="customer-banner-mobile">
                <div className="banner-top-mobile">
                    <NavbarMobile />
                </div>
                <div className="customer-content-mobile">
                    <p className="light-text">신뢰와 소통의 중심</p>
                    <p>
                        <span className="light-text">신일푸드 </span>
                        <span className="bold-text">고객센터</span>
                    </p>
                </div>
            </div>
            <CustomerNavbarMobile activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderContent()}
        </div>
    );
}

export default CustomerSupportMobile;
