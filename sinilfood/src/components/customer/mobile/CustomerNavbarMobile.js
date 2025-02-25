import React from 'react';
import './CustomerNavbarMobile.css';

function CustomerNavbarMobile({ activeTab, setActiveTab }) {
    const menuItems = [
        { id: 'inquiry', text: '고객문의', width: '53px' },
        { id: 'faq', text: '자주하는 질문', width: '65px' },
        { id: 'notice', text: '공지사항', width: '53px' },
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
