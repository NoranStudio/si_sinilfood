import React from 'react';
import './BusinessNavbarMobile.css';

function BusinessNavbarMobile({ activeTab, setActiveTab }) {
    const menuItems = [
        { id: 'manufacturing', text: '전용유 제작', width: '53px' },
        { id: 'types', text: '식용유 종류', width: '53px' },
        { id: 'renewable', text: '신재생에너지', width: '65px' },
        { id: 'manufacturers', text: '제조사 현황', width: '53px' },
        { id: 'logistics', text: '물류시스템', width: '53px' },
    ];

    return (
        <div className="business-navbar-mobile">
            <div className="business-nav-mobile">
                <ul className="nav-list-mobile">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className={activeTab === item.id ? 'active' : ''}
                            onClick={() => setActiveTab(item.id)}
                            style={{ width: item.width }}
                        >
                            <span>{item.text}</span>
                            {activeTab === item.id && <div className="active-indicator-mobile" />}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="nav-border-line-mobile" />
        </div>
    );
}

export default BusinessNavbarMobile;
