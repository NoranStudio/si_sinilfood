import React from 'react';
import './CustomerNavbarMobile.css';

function CustomerNavbarMobile({ activeTab, setActiveTab }) {
    const menuItems = [
        { id: 'customer-service', text: '고객센터', width: '53px' },
        { id: 'news', text: '새소식', width: '53px' },
        { id: 'board', text: '사내 자유게시판', width: '80px' },
    ];

    return (
        <div className="customer-navbar-mobile">
            <div className="customer-nav-mobile">
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

export default CustomerNavbarMobile;
