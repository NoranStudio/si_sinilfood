import React from 'react';
import './Business.css';
import oilFeature from '../../assets/img/business/oil_feature.png';

function Manufacturing() {
    return (
        <div className="business-content-section">
            <div className="manufacturing-content">
                <h3 className="manufacturing-title">전용유란?</h3>
                <p className="manufacturing-description">
                    <span className="description-light">
                        여러유종별로 특성과 식품 첨가물 추가를 통해 단점 개선과 기능성을 높인
                    </span>
                    <br />
                    <span className="description-bold">고객의 필요에 맞게 커스터마이징된 식용유</span>
                    <span className="description-light">입니다</span>
                </p>
                <div className="feature-section">
                    <div className="feature-image-container">
                        <img src={oilFeature} alt="전용유의 특징" className="feature-image" />
                        <h3 className="feature-title">전용유의 특징</h3>
                    </div>
                    <p className="feature-description">
                        전용유의 특징은 기름 산패율 측면에서 식용유보다
                        <br />
                        훨씬 뛰어나며 용도별 전용 배합제품에 프랜차이즈
                        <br />
                        전용 디자인으로 인한 홍보효과까지 가능하며
                        <br />
                        각 브랜드별로 용도별 최적화의 비율을 통한 전용유
                        <br />
                        제작으로 제품의 사용기간을 늘려주고 바삭한 식감
                        <br />
                        역시 일반유보다 향상되어 맛의 균일화가 가능합니다.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Manufacturing;
