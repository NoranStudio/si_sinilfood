import React from 'react';
import './FCProducts.css';
import Navbar from '../../components/Navbar';

function FCProducts() {
    return (
        <div className="business-wrapper">
            <div className="business-container">
                <Navbar />
                <div className="business-content">
                    <h1>사업영역</h1>
                    <section className="business-intro">
                        <h2>신일푸드의 사업영역을 소개합니다</h2>
                        <p>고객의 신뢰와 함께 성장하는 기업이 되겠습니다.</p>
                    </section>
                    {/* 추가 섹션들이 들어갈 예정 */}
                </div>
            </div>
        </div>
    );
}

export default FCProducts;
