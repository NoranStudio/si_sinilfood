import React from "react";
import companyBuildingImg from "../../assets/img/about/company-building.png";
import meetingImg from "../../assets/img/about/meeting.png";
import missionImg from "../../assets/img/about/mission.png";
import signImg from "../../assets/img/about/sign.png";
import { ReactComponent as GreenIcon } from "../../assets/img/about/green.svg";
import { ReactComponent as SocialIcon } from "../../assets/img/about/social.svg";
import { ReactComponent as GroupIcon } from "../../assets/img/about/group.svg";

import "../../assets/styles/about/about-company.css";

const AboutCompany = () => {
  return (
    <div classname="about__company">
      <div classname="about__company__contents">
        <h1>(주)신일푸드 소개</h1>
        <img src={companyBuildingImg} alt="company-building" />
        <div>
          <div className="about__company__detail">
            <p>
              주식회사 신일푸드는 국내 유지업계를 선도하는 독자적인 전용 물류
              시스템을 바탕으로, 국내 외식산업 전반에 긍정적인 영향을 미치는
              <span>식용유 유통 및 푸드서비스 전문 기업</span>입니다. 회사 창립
              이후, 오랜 기간 축적해온 경험과 경쟁력을 바탕으로 대형
              프랜차이즈부터 중소형 프랜차이즈까지 소통하며,{" "}
              <span>상생 경영을 통해 더 큰 가치를 창출</span>하는 데 주력하고
              있습니다.
            </p>
            <p>
              또한 신일푸드는{" "}
              <span>
                식용유 납품부터 회수유 수거까지 통합 관리할 수 있는 ERP
                프로그램을 자체 개발
              </span>
              해 실무에 적용하였으며, 이 프로그램을 활용해 급변하는 경영환경
              변화와 기술발전에 항상 대응하고 선도하며{" "}
              <span>ESG 경영 실천</span>에 노력하여 사회적으로 크게 이바지할 수
              있는 기업으로 성장할 것입니다.
            </p>
          </div>
          <div classname="about__company__sign">
            <p>(주)신일푸드 대표이사</p>
            <p>박 영 미</p>
            <img src={signImg} alt="sign" />
          </div>
        </div>
      </div>
      <img
        classname="about__company__banner"
        src={meetingImg}
        alt="company-banner"
      />
      <div classname="about__company__contents">
        <h1>경영이념</h1>
        <p className="about__company__mission">Yes!</p>
        <p className="about__company__mission">
          긍정의 힘으로 <span>정직, 도전, 창의, 나눔</span>
        </p>
        <img src={missionImg} alt="mission" />
      </div>
      <div classname="about__company__contents">
        <h1>ESG 경영</h1>
        <div classname="about__company__esg-title">
          <p>지속가능경영</p>
          <p>ESG 핵심철학</p>
        </div>
        <div className="about__company__cards">
          <div className="about__company__card">
            <GreenIcon />
            <p>녹색 경영</p>
            <p>에너지 효율화</p>
            <p>유해물질 배출 제로화</p>
            <p>탄소배출 줄이기</p>
          </div>
          <div className="about__company__card">
            <SocialIcon />
            <p>사회적 책임</p>
            <p>고용확대 및 고용평등</p>
            <p>지역 균형발전</p>
            <p>제품 안전</p>
          </div>
          <div className="about__company__card">
            <GroupIcon />
            <p>지배구조 개선</p>
            <p>윤리(투명)경영</p>
            <p>소액주주 보호</p>
            <p>부정부패 척결</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
