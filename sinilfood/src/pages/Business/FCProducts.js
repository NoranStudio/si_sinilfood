import React from 'react';
import './FCProducts.css';
import businessBanner from '../../assets/img/business/business_banner.png';

function FCProducts() {
    return (
        <div>
            <home_banner />
            <div className="business-page">
                <div className="business-banner" style={{ backgroundImage: `url(${businessBanner})` }}>
                    <h1>사업영역</h1>
                </div>
                <div className="business-content">
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
