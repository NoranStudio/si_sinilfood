import React from 'react';
import './BusinessMobile.css';
import oilFeature from '../../../assets/img/business/oil_feature.png';
import managementMobile from '../../../assets/img/business/mobile/business_management_mobile.png';
import limitMobile from '../../../assets/img/business/mobile/business_limit_mobile.png';

function ManufacturingMobile() {
    return (
        <div className="business-content-section-mobile">
            <div className="manufacturing-content-mobile">
                <h3 className="manufacturing-title-mobile">전용유란?</h3>
                <p className="manufacturing-description-mobile">
                    <span className="description-light-mobile">
                        여러유종별로 특성과 식품 첨가물 추가를 통해 단점 개선과 기능성을
                        <br />
                        높인 고객의 필요에 맞게 커스터마이징된 식용유입니다
                    </span>
                </p>

                <div className="feature-section-mobile">
                    <div className="feature-image-container-mobile">
                        <div className="feature-image-border-mobile"></div>
                        <img src={oilFeature} alt="전용유의 특징" className="feature-image-mobile" />
                        <h3 className="feature-title-mobile">전용유의 특징</h3>
                    </div>
                    <p className="feature-description-mobile">
                        전용유의 특징은 기름 산패율 측면에서 식용유보다 훨씬 뛰어나며 용도별 전용 배합제품에 프랜차이즈
                        전용 디자인으로 인한 홍보 효과까지 가능하며 각 브랜드별로 용도별 최적화의 비율을 통한 전용유
                        제작으로 제품의 사용기간을 늘려주고 바삭한 식감 역시 일반유보다 향상되어 맛의 균일화가
                        가능합니다.
                    </p>
                </div>

                <hr className="backline-mobile" />

                <h3 className="advantages-title-mobile">전용유 활용시 장점</h3>
                <div className="advantages-boxes-mobile">
                    <div className="advantage-box-mobile">
                        <h4 className="advantage-box-title-mobile">지속적 관리 & 수익 안정화</h4>
                        <p className="advantage-box-description-mobile">
                            가맹점에 대한 지속적인 관리와 안정적인 수익구조 구축
                        </p>
                    </div>
                    <div className="advantage-box-mobile">
                        <h4 className="advantage-box-title-mobile">차별성</h4>
                        <p className="advantage-box-description-mobile">
                            프랜차이즈 가맹점의 차별화된 재고관리와 소비자에게 신뢰를 줄수있는 대기업 제조사와의 전용유
                            제작으로 인해 안정적인 생산과 공급망 구축과 경쟁력 있는 가격 으로 인한 지속가능한 수익구조
                            완성
                        </p>
                    </div>
                </div>
                <hr className="biodiesel-divider-mobile" />

                <div className="advantages-section-mobile">
                    <h3 className="advantages-title-mobile">(주)신일푸드 선정시 장점</h3>
                    <div className="advantages-boxes-mobile">
                        <div className="advantage-box-mobile">
                            <h4 className="advantage-box-title-mobile">물류</h4>
                            <ul className="advantage-box-list-mobile">
                                <li className="advantage-box-description-mobile">
                                    전용 물류시스템 사용으로 "물류 효율화" 상승 가능
                                    <br />
                                    (기존 물류 이용시 1CAN당 최소 4,000원 비용 발생)
                                </li>
                                <li className="advantage-box-description-mobile">
                                    신일푸드 물류시스템을 관리의 툴로 이용가능
                                    <br />
                                    (관리하기 예민한 부분인 전용유 사용 여부를 신일푸드가 직접 관리 가능)
                                </li>
                                <li className="advantage-box-description-mobile">
                                    전국적 유통 체인망이 구축되어 있어 상기 장점을 지방까지 적용 가능
                                </li>
                            </ul>
                        </div>
                        <div className="advantage-box-mobile">
                            <h4 className="advantage-box-title-mobile">고객사 자금운용</h4>
                            <p className="advantage-box-description-mobile">
                                기존 전용유 매입에 대한 자금을 신일푸드에서 대신 매입함으로써 고객사 자금 운영의 여유가
                                생겨 향후 고객사의 다른 투자 및 자금 운용에 이점이 발생함
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="biodiesel-divider-mobile" />

                <div className="advantages-section-mobile">
                    <h3 className="advantages-title-mobile">주체별 역할</h3>
                    <div className="role-content-section-mobile">
                        <div className="role-description-mobile">
                            <span className="role-text-mobile">지속적 관리와 신속한 대응으로</span>
                            <br />
                            <span className="role-text-bold-mobile">가맹점 만족도 상승</span>
                        </div>
                        <img src={managementMobile} alt="주체별 역할 그래프" className="role-graph-mobile" />
                    </div>
                </div>
                <hr className="biodiesel-divider-mobile" />

                <div className="advantages-section-mobile">
                    <h3 className="advantages-title-mobile" style={{ whiteSpace: 'nowrap' }}>
                        본사물류의 한계
                    </h3>
                    <div className="limit-content-mobile">
                        <img src={limitMobile} alt="본사물류의 한계" className="limit-image-mobile" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManufacturingMobile;
