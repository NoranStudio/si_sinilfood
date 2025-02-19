import React from 'react';
import './Business.css';
import biodieselImg from '../../assets/img/business/biodiesel.png';
import batteryImg from '../../assets/img/business/battery.png';
import globeImg from '../../assets/img/business/globe.png';
import fuelImg from '../../assets/img/business/fuel.png';
import bioDieselExplainedImg from '../../assets/img/business/bioDiesel_explained.png';
import foodExplainedImg from '../../assets/img/business/food_explained.png';

function RenewableEnergy() {
    return (
        <div className="business-content-section">
            <div className="renewable-content">
                <h3 className="renewable-title">
                    (주)신일푸드는 탄소중립 사업을 통한
                    <br />
                    <span className="highlight-text">ESG 지속 경영</span>을 실현하고 있습니다.
                </h3>
            </div>
            <div className="biodiesel-section">
                <img src={biodieselImg} alt="바이오디젤" className="biodiesel-image" />
                <div className="biodiesel-content">
                    <h4 className="biodiesel-title">바이오디젤에 의한 탄소중립</h4>
                    <p className="biodiesel-description">
                        바이오디젤은 오일과 메탄올을 촉매로 반응시켜 생산되며, 이 과정에서 글리세린이 함께 생성됩니다.
                        바이오디젤은 일반 경유보다 탄소 배출량이 적고, 오염물질과 유해물질 배출이 적은 청정
                        에너지원입니다. 바이오디젤이 탄소 중립이 가능한 이유는 연소 과정에서 배출된 이산화탄소를 원료
                        작물이 다시 흡수하기 때문입니다.
                    </p>
                    <p className="biodiesel-description-bold">
                        <span className="extra-bold">
                            탄소 중립이란, 이산화탄소를 배출한 만큼 이산화탄소를 흡수하여 실질적인 순 배출량이 0(zero)가
                            되는 개념을 탄소 중립이라 합니다.
                        </span>
                        지구온난화는 주로 온실기체 때문에 발생하는데, 바이오디젤은 이산화탄소 배출량을 기존 연료 대비
                        40~60% 줄여줍니다. 또한, 폐식용유로 만든 지속가능항공연료(SAF)는 일반 항공연료보다 이산화탄소
                        배출을 80% 줄입니다. 우리나라에서는 경유에도 바이오디젤이 혼합되어 있으며, 혼합 비율은 현재
                        3.5%입니다. 2030년까지 이 비율을 5%에서 8%로 늘릴 계획입니다.
                    </p>
                </div>
            </div>
            <div className="renewable-content">
                <div className="biodiesel-boxes">
                    <div className="biodiesel-box first">
                        <p className="box-description">
                            일반 경유에 비해
                            <br />
                            탄소 배출량이 적게 배출되며
                        </p>
                        <img src={batteryImg} alt="배터리" className="box-image" />
                        <p className="box-sub-description">오염물질과 유해 물질 배출량이 매우 낮은</p>
                        <p className="box-title">청정 에너지원</p>
                    </div>
                    <div className="biodiesel-box second">
                        <p className="box-description">
                            바이오디젤은 기존 연료에 비해 이산화탄소
                            <br />
                            배출량이 40-60% 적게배출
                        </p>
                        <img src={globeImg} alt="지구" className="box-image globe" />
                        <p className="box-sub-description">바이오디젤과 같은 신재생에너지는 탄소중립의</p>
                        <p className="box-title second">현실적인 대안</p>
                    </div>
                    <div className="biodiesel-box third">
                        <p className="box-description">
                            2030년까지 바이오디젤 의무혼합 비율을
                            <br />
                            5%에서 8%까지 상향
                        </p>
                        <img src={fuelImg} alt="연료" className="box-image fuel" />
                        <p className="box-sub-description">우리나라 경유차량 바이오디젤 의무혼합 비율</p>
                        <p className="box-title third">3.5%</p>
                    </div>
                </div>
                <h3 className="renewable-business-title">신재생에너지 사업</h3>
                <p className="renewable-business-description">
                    신일푸드는 일반/사업장 폐기물 중간재활용업을 취득하여 폐기 또는 버려지는 각종의 식물성잔재물,
                    동물성잔재물, 튀김식품 잔재물, 제과, 제빵, 제면 부산물에서 바이오 디젤, 단미 사료를 추출, 회수 하는
                    사업을 진행하고 있습니다.{' '}
                    <span className="bold-text">
                        신일푸드는 버려지는 자원을 재활용함으로써 환경을 보호하는 친환경 기업입니다.
                    </span>
                </p>
            </div>
            <div className="renewable-images">
                <div className="renewable-image-container">
                    <img src={bioDieselExplainedImg} alt="바이오디젤 설명" className="renewable-detail-image" />
                    <div className="renewable-image-content">
                        <h4 className="renewable-image-title">바이오디젤</h4>
                        <p className="renewable-image-description">
                            식물성 기름이나 동물성 지방을 원료로 하여 만든 바이오연료로 바이오에탄올과 함께 가장 널리
                            사용된다. 이때 만든 바이오디젤이 바로 지방산 메틸에스테르(FAME)이다.
                        </p>
                    </div>
                </div>
                <div className="renewable-image-container">
                    <img src={foodExplainedImg} alt="식품 설명" className="renewable-detail-image" />
                    <div className="renewable-image-content">
                        <h4 className="renewable-image-title">단미사료 (배합사료)</h4>
                        <p className="renewable-image-description">
                            식물성, 동물성 또는 광물성 물질로서 사료로 직접 사용되거나, 배합사료의 원료로 사용된다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RenewableEnergy;
