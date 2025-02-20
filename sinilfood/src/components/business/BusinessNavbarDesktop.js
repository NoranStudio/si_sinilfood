import React from 'react';
import './BusinessNavbar.css';

function BusinessNavbarDesktop({ activeTab, setActiveTab }) {
    const menuItems = [
        { id: 'manufacturing', text: '전용유 제작', width: '111px' },
        { id: 'types', text: '식용유 종류', width: '111px' },
        { id: 'renewable', text: '신재생에너지 사업', width: '173px' },
        { id: 'manufacturers', text: '제조사 현황', width: '111px' },
        { id: 'logistics', text: '신일푸드 물류시스템', width: '194px' },
    ];

    return (
        <div className="business-navbar-wrapper">
            <div className="business-navbar-container">
                <nav className="business-nav">
                    <ul className="business-nav-list">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className={activeTab === item.id ? 'active' : ''}
                                onClick={() => setActiveTab(item.id)}
                            >
                                <span>{item.text}</span>
                                {activeTab === item.id && (
                                    <div className="active-indicator" style={{ width: item.width }} />
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="nav-border-line" />
            </div>
        </div>
    );
}

export default BusinessNavbarDesktop;
