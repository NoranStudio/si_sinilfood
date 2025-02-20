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
import storage1 from '../../assets/img/business/storage/storage_1.png';
import storage2 from '../../assets/img/business/storage/storage_2.png';
import storage3 from '../../assets/img/business/storage/storage_3.png';
import storage4 from '../../assets/img/business/storage/storage_4.png';
import playGraph from '../../assets/img/business/play_graph.png';

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
            <div className="container-section">
                <h3 className="container-title">자체 제작 전용 보관용기</h3>
                <p className="container-description">
                    신일푸드는 부산물 보관으로 인한 화재위험을 예방 하고자 자체적으로 보관용기를 제작하여
                    <br /> 비치 후 주기적인 전용 보관용기 교체 및 분기마다 전문 청소업체를 통한 폐기물 보관장 청소까지
                    진행하고 있습니다.
                </p>
                <div className="storage-images">
                    <img src={storage1} alt="보관용기 1" className="storage-image" />
                    <img src={storage2} alt="보관용기 2" className="storage-image" />
                    <img src={storage3} alt="보관용기 3" className="storage-image" />
                    <img src={storage4} alt="보관용기 4" className="storage-image" />
                </div>

                <div className="biodiesel-info">
                    <h3 className="biodiesel-info-title">바이오디젤(Bio Diesel)이란?</h3>
                    <p className="biodiesel-info-description">
                        동물성 유지(소기름, 돼지기름 등) 및 식물성 유지(폐식용유, 유채유 등)를 에탄올과 반응시켜 생산한
                        친환경 수송연료(지방산 메틸에스테르)입니다.
                        <br />
                        기존의 경유 차량 엔진의 설비 변경 없이 사용가능하고, 폐식용유 재활용을 통한 수질 개선 및
                        대기오염물질 배출이 없는 친환경 신재생에너지입니다.
                    </p>

                    <div className="biodiesel-background">
                        <h3 className="background-title">바이오디젤 보급 추진 배경</h3>
                        <p className="background-description">
                            2002년 월드컵 개최에 따른 대기질 및 환경개선을 위한 정책으로 시작(산업부, 환경부, 기재부,
                            국토해양부 등)
                            <br />
                            2007년 혼합율 0.5%로 시작하여 2010년부터 2.0% 의무혼합 후 2015년 7월 30일까지 유지(산업부
                            고시 근거)
                            <br />
                            2015년 7월 31일부터 수송용 연료 의무혼합제도[RFS(Renewable Fuel Standard)] 범령 발효
                        </p>
                        <p className="rfs-title">*RFS(Renewable Fuel Standard) : 신재생연료 의무혼합제도</p>
                        <p className="rfs-description">
                            의무대상자로 하여금 자신이 공급하는 수송 연료의 일정비율을 신재생 에너지연료로 혼합하여
                            공급토록 의무화하는 제도이다.
                        </p>
                        <div className="rfs-graph-section">
                            <h4 className="rfs-graph-title">
                                &lt; RFS 시행령의 바이오디젤 중장기 의무혼합비율(%) &gt;
                            </h4>
                            <img src={playGraph} alt="RFS 시행령 그래프" className="rfs-graph" />
                            <p className="rfs-graph-description">
                                바이오디젤 의무혼합자(정유사)를 통해 전국 모든 주유소에서 현재 BD5(경유 97% + 바이오디젤
                                3%)가 유통, 바이오디젤이 혼합되지 아니한 경유는 가짜 경유(불법 유통 대상)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="biodiesel-effects">
                    <h3 className="effects-title">바이오디젤 기대효과</h3>

                    <div className="effects-box">
                        <h4 className="effects-box-title">환경개선 효과</h4>
                        <div className="effects-box-description">
                            <ul>
                                <li>토양 및 해상 유출 시 3주 이내 90%이상 생분해 (오염방지)</li>
                                <li>경유 1kℓ를 바이오디젤로 대체 시, 2.59톤의 CO2 저감</li>
                                <li>오염물질(발암성 방향족화합물) 배출 거의 없음</li>
                                <li>황산화물 배출 전혀 없음</li>
                                <li>
                                    폐식용유 재활용 통한 수질 개선
                                    <br />
                                    [BD원료로 사용되는 폐식용유 재활용은 매년 소양강 댐 저수규모(29억톤)의 21개 이상의
                                    수질을 개선 (우리나라 국민의 연간 소비 식수량(약 50억톤)의 12배 수준)]
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="effects-box">
                        <h4 className="effects-box-title">국산 에너지 확보 효과</h4>
                        <p className="effects-box-description">
                            <ul>
                                <li>국내 폐자원(폐식용유, 동물성 기름) 재활용 (2019년 기준 약 177천톤)</li>
                                <li>
                                    국내 휴경지에 유채 및 해바라기 지배를 통한 원료 공급 가능
                                    <br /> (작물 재배를 통한 경관 활용으로 농가소득 증가 기대)
                                </li>
                            </ul>
                        </p>
                    </div>

                    <div className="effects-box">
                        <h4 className="effects-box-title">경제적 효과</h4>
                        <p className="effects-box-description">
                            <ul>
                                <li>연료 내 10% 산소 함유로 완전연소 유도</li>
                                <li>바이오디젤 플랜트 수출 및 해외 팜 오일 농장 개발(인도네시아, 10,800ha)</li>
                                <li>
                                    신재생에너지 선도국인 유럽, 미국 등지로 수출 (총 수출 물량 : 약 632천kℓ, 약
                                    6,951억원 달성)
                                </li>
                                <li>경유 차량의 기존 엔진 그대로 적용 가능</li>
                                <li>
                                    바이오디젤 보급 이후, 전국의 폐식용유 수거 체계 완벽한 구축 [신산업 및 대규모(전국
                                    약 5,000명) 인력 창출]
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RenewableEnergy;
