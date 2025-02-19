import React from 'react';
import './Business.css';
import biodieselImg from '../../assets/img/business/biodiesel.png';

function RenewableEnergy() {
    return (
        <div className="business-content-section">
            <div className="renewable-content">
                <h3 className="renewable-title">
                    (주)신일푸드는 탄소중립 사업을 통한
                    <br />
                    <span className="highlight-text">ESG 지속 경영</span>을 실현하고 있습니다.
                </h3>
                <div className="biodiesel-section">
                    <img src={biodieselImg} alt="바이오디젤" className="biodiesel-image" />
                    <div className="biodiesel-content">
                        <h4 className="biodiesel-title">바이오디젤에 의한 탄소중립</h4>
                        <p className="biodiesel-description">
                            바이오디젤은 오일과 메탄올을 촉매로 반응시켜 생산되며, 이 과정에서 글리세린이 함께
                            생성됩니다. 바이오디젤은 일반 경유보다 탄소 배출량이 적고, 오염물질과 유해물질 배출이 적은
                            청정 에너지원입니다. 바이오디젤이 탄소 중립이 가능한 이유는 연소 과정에서 배출된
                            이산화탄소를 원료 작물이 다시 흡수하기 때문입니다.
                        </p>
                        <p className="biodiesel-description-bold">
                            <span className="extra-bold">
                                탄소 중립이란, 이산화탄소를 배출한 만큼 이산화탄소를 흡수하여 실질적인 순 배출량이
                                0(zero)가 되는 개념을 탄소 중립이라 합니다.
                            </span>
                            지구온난화는 주로 온실기체 때문에 발생하는데, 바이오디젤은 이산화탄소 배출량을 기존 연료
                            대비 40~60% 줄여줍니다. 또한, 폐식용유로 만든 지속가능항공연료(SAF)는 일반 항공연료보다
                            이산화탄소 배출을 80% 줄입니다. 우리나라에서는 경유에도 바이오디젤이 혼합되어 있으며, 혼합
                            비율은 현재 3.5%입니다. 2030년까지 이 비율을 5%에서 8%로 늘릴 계획입니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RenewableEnergy;
