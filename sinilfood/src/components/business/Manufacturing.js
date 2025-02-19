import React from 'react';
import './Business.css';
import oilFeature from '../../assets/img/business/oil_feature.png';
import roleGraph from '../../assets/img/business/role_graph.png';
import limitImg from '../../assets/img/business/limit.png';

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
                        <div className="feature-image-border"></div>
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
                <div className="backline"></div>
                <div className="advantages-section">
                    <h3 className="advantages-title advantages-title-multiline">
                        전용유
                        <br />
                        활용시 장점
                    </h3>
                    <div className="advantages-boxes">
                        <div className="advantage-box">
                            <h4 className="advantage-box-title">지속적 관리 & 수익 안정화</h4>
                            <p className="advantage-box-description">
                                가맹점에 대한 지속적인 관리와 안정적인 수익구조 구축
                            </p>
                        </div>
                        <div className="advantage-box">
                            <h4 className="advantage-box-title">차별성</h4>
                            <p className="advantage-box-description">
                                프랜차이즈 가맹점의 차별화된 재고관리와 소비자에게 신뢰를 줄수있는 대기업 제조사와의
                                전용유 제작으로 인해 안정적인 생산과 공급망 구축과 경쟁력 있는 가격 으로 인한 지속가능한
                                수익구조 완성
                            </p>
                        </div>
                    </div>
                </div>
                <div className="backline-bottom"></div>
                <div className="advantages-section">
                    <h3 className="advantages-title">
                        (주)신일푸드
                        <br />
                        선정시 장점
                    </h3>
                    <div className="advantages-boxes">
                        <div className="advantage-box">
                            <h4 className="advantage-box-title">물류</h4>
                            <ul className="advantage-box-list">
                                <li className="advantage-box-description">
                                    전용 물류시스템 사용으로 "물류 효율화" 상승 가능
                                    <br />
                                    (기존 물류 이용시 1CAN당 최소 4,000원 비용 발생)
                                </li>
                                <li className="advantage-box-description">
                                    신일푸드 물류시스템을 관리의 툴로 이용가능
                                    <br />
                                    (관리하기 예민한 부분인 전용유 사용 여부를 신일푸드가 직접 관리 가능)
                                </li>
                                <li className="advantage-box-description">
                                    전국적 유통 체인망이 구축되어 있어 상기 장점을 지방까지 적용 가능
                                </li>
                            </ul>
                        </div>
                        <div className="advantage-box">
                            <h4 className="advantage-box-title">고객사 자금운용</h4>
                            <p className="advantage-box-description">
                                기존 전용유 매입에 대한 자금을 신일푸드에서 대신 매입함으로써 고객사 자금 운영의 여유가
                                생겨 향후 고객사의 다른 투자 및 자금 운용에 이점이 발생함
                            </p>
                        </div>
                    </div>
                </div>
                <div className="backline-bottom"></div>
                <div className="advantages-section">
                    <h3 className="advantages-title">주체별 역할</h3>
                    <div className="role-content-section">
                        <div className="role-description">
                            <span className="role-text">지속적 관리와 신속한 대응으로 </span>
                            <span className="role-text-bold">가맹점 만족도 상승</span>
                        </div>
                        <img src={roleGraph} alt="주체별 역할 그래프" className="role-graph" />
                    </div>
                </div>
                <div className="backline-bottom"></div>
                <div className="advantages-section">
                    <h3 className="advantages-title" style={{ whiteSpace: 'nowrap' }}>
                        본사물류의 한계
                    </h3>
                    <div className="limit-content">
                        <img src={limitImg} alt="본사물류의 한계" className="limit-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Manufacturing;
