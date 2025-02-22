import React from 'react';
import './BusinessMobile.css';
import map from '../../../assets/img/business/mobile/map.png';

function LogisticsMobile() {
    return (
        <div className="logistics-section-mobile">
            <h2 className="logistics-title-mobile">전국직영센터</h2>
            <div className="logistics-description-mobile">
                <p>
                    주식회사 신일푸드는 <strong>전국 외식 매장의 신뢰할 수 있는 전용유 유통 파트너</strong>로, 최고의
                    품질을 자랑하는 전용유를 전국에 신속하게 일일 배송해 드립니다.
                </p>
                <p>
                    고객의 성공을 돕기 위해, 전국 배송이 가능한 물류 네트워크와 우수한 상품력, 그리고 편리한 발주
                    시스템을 구축하고 전문 인력을 배치하여 최상의 서비스를 제공합니다.
                </p>
            </div>
            <div className="logistics-map-mobile">
                <img src={map} alt="전국 물류 네트워크" />
            </div>
        </div>
    );
}

export default LogisticsMobile;
