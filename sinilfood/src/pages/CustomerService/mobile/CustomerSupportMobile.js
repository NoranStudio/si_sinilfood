import React, { useState } from 'react';
import './CustomerSupportMobile.css';
import NavbarMobile from '../../../components/mobile/NavbarMobile';
import CustomerNavbarMobile from '../../../components/customer/mobile/CustomerNavbarMobile';
import InquiryMobile from '../../../components/customer/mobile/InquiryMobile';
import FAQMobile from '../../../components/customer/mobile/FAQMobile';
import NoticeMobile from '../../../components/customer/mobile/NoticeMobile';

function CustomerSupportMobile() {
    const [activeTab, setActiveTab] = useState('inquiry');

    const renderContent = () => {
        switch (activeTab) {
            case 'inquiry':
                return <InquiryMobile />;
            case 'faq':
                return <FAQMobile />;
            case 'notice':
                return <NoticeMobile />;
            default:
                return <InquiryMobile />;
        }
    };

    return (
        <div className="customer-wrapper-mobile">
            <div className="customer-banner-mobile">
                <div className="banner-top-mobile">
                    <NavbarMobile />
                </div>
                <div className="customer-content-mobile">
                    <p className="light-text">신일푸드의</p>
                    <p className="bold-text">고객서비스를 안내합니다</p>
                </div>
            </div>
            <CustomerNavbarMobile activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderContent()}
        </div>
    );
}

export default CustomerSupportMobile;
