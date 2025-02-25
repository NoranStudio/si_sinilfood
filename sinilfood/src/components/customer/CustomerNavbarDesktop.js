import React from 'react';
import './CustomerNavbar.css';

function CustomerNavbarDesktop({ activeTab, setActiveTab }) {
    const menuItems = [
        { id: 'customer-service', text: '고객센터' },
        { id: 'news', text: '새소식' },
        { id: 'board', text: '사내 자유게시판' },
    ];

    return (
        <div className="customer-navbar-wrapper">
            <div className="customer-navbar-container">
                <nav className="customer-nav">
                    <ul className="customer-nav-list">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className={activeTab === item.id ? 'active' : ''}
                                onClick={() => setActiveTab(item.id)}
                            >
                                <span>{item.text}</span>
                                {activeTab === item.id && <div className="customer-active-indicator" />}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="nav-border-line" />
            </div>
        </div>
    );
}

export default CustomerNavbarDesktop;
