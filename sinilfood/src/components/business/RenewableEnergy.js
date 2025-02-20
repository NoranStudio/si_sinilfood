import React from 'react';
import './Business.css';
import biodieselImg from '../../assets/img/business/biodiesel.png';
import batteryImg from '../../assets/img/business/battery.png';
import globeImg from '../../assets/img/business/globe.png';
import fuelImg from '../../assets/img/business/fuel.png';
import bioDieselExplainedImg from '../../assets/img/business/bioDiesel_explained.png';
import foodExplainedImg from '../../assets/img/business/food_explained.png';
import recycleGraphImg from '../../assets/img/business/recycle_graph.png';
import process1 from '../../assets/img/business/process/process_1.png';
import process2 from '../../assets/img/business/process/process_2.png';
import process3 from '../../assets/img/business/process/process_3.png';
import process4 from '../../assets/img/business/process/process_4.png';
import process5 from '../../assets/img/business/process/process_5.png';
import process6 from '../../assets/img/business/process/process_6.png';
import process7 from '../../assets/img/business/process/process_7.png';
import process8 from '../../assets/img/business/process/process_8.png';
import process9 from '../../assets/img/business/process/process_9.png';

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
                    사업을 진행하고 있습니다.
                    <span className="bold-text">
                        신일푸드는 버려지는 자원을 재활용함으로써 환경을 보호하는 친환경 기업입니다.
                    </span>
                </p>
                <div className="renewable-images">
                    <div className="renewable-image-container">
                        <img src={bioDieselExplainedImg} alt="바이오디젤 설명" className="renewable-detail-image" />
                        <div className="renewable-image-content">
                            <h4 className="renewable-image-title">바이오디젤</h4>
                            <p className="renewable-image-description">
                                식물성 기름이나 동물성 지방을 원료로 하여 만든 바이오연료로 바이오에탄올과 함께 가장
                                널리 사용된다. 이때 만든 바이오디젤이 바로 지방산 메틸에스테르(FAME)이다.
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
                <h3 className="renewable-business-title">재활용시 비용절감 효과</h3>
                <p className="renewable-business-description">
                    식품공장에서 발생하는 부산물을 평균 데이터로 사용 한 통계입니다.
                </p>
                <div className="recycle-section">
                    <div className="recycle-graph-box">
                        <img src={recycleGraphImg} alt="재활용 비용절감 그래프" />
                    </div>
                    <div className="recycle-boxes">
                        <div className="recycle-box">
                            <h4 className="recycle-box-title">
                                부산물 재활용 시
                                <br />
                                합산이익
                            </h4>
                            <div className="recycle-box-content">
                                <p className="recycle-box-amount">+30,720,000원</p>
                                <p className="recycle-box-description">
                                    연간 발생하는 부가이익
                                    <br />
                                    (폐기물 배출 비용 절감+매입 비용)
                                </p>
                            </div>
                        </div>
                        <div className="recycle-box">
                            <h4 className="recycle-box-title">
                                부산물 폐기
                                <br />
                                비용 절감
                            </h4>
                            <div className="recycle-box-content">
                                <p className="recycle-box-amount">-13,680,000원</p>
                                <p className="recycle-box-description">
                                    부산물을 폐기물로 배출할 경우
                                    <br />
                                    발생하는 처리비용 (KG당 150원 계산)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="renewable-business-title">폐식용유 수거를 통한 BD 생산 과정</h3>
                <p className="renewable-business-description">
                    국내에서 배출되는 폐식용유 수거 및 이를 이용한 바이오디젤 생산은 완벽한 재생순환 시스템입니다.
                </p>
                <div className="process-section">
                    {[
                        {
                            img: process1,
                            num: '01',
                            title: '폐식용유 수거',
                            desc: '학교, 대형음식점, 치킨가게 및 대형 아파트 단지',
                        },
                        {
                            img: process2,
                            num: '02',
                            title: '폐식용유 중.좌상',
                            desc: '(수거된 폐식용유 중간 처리상)의 창고로 이송 보관',
                        },
                        {
                            img: process3,
                            num: '03',
                            title: '수거된 폐식용유 분리',
                            desc: '2019년 폐식용유 사용량 161,000톤으로 약 1천만개 이상의 폐식용유 깡통을 종사자가 수작업으로 처리',
                        },
                        {
                            img: process4,
                            num: '04',
                            title: '폐식용유 분리',
                            desc: '폐유 및 깡통으로 분리 후 마지막 한 방울도 활용하기 위해 폐식용유 깡통을 쌓아 유분이 바닥에 떨어지게 함',
                        },
                        {
                            img: process5,
                            num: '05',
                            title: '폐식용유 정제공장에서 불순물 제거',
                            desc: '여과지를 이용하여 이물질, 슬러지 등 제거',
                        },
                        {
                            img: process6,
                            num: '06',
                            title: '폐식용유 정제공장에서 수분 침전',
                            desc: '최종 제품의 순도 향상을 위한 정제 작업',
                        },
                        { img: process7, num: '07', title: '이송', desc: '정제된 폐식용유를 바이오디젤 공장으로 이송' },
                        { img: process8, num: '08', title: '바이오디젤 제조', desc: '공장 전경' },
                        {
                            img: process9,
                            num: '09',
                            title: '바이오 디젤 생산',
                            desc: '원료(폐식용유) + 첨가제(메탄올) + 흑미 (SM) > 바이오 디젤[86-88%], 부산물로 글리세린 (10-15%) 및 피치 생신',
                        },
                    ].map((box, index) => (
                        <div className="process-box" key={index}>
                            <img src={box.img} alt={`프로세스 ${index + 1}`} className="process-background" />
                            <div className="process-content">
                                <div className="process-number-circle">
                                    <span className="process-number">{box.num}</span>
                                </div>
                                <h4 className="process-title">{box.title}</h4>
                                <p className="process-description">{box.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RenewableEnergy;
