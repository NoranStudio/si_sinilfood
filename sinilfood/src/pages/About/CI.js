import React from "react";
import aboutCiImg from "../../assets/img/about/about-ci.png";
import { ReactComponent as DownloadIcon } from "../../assets/img/download-icon.svg";
import "../../assets/styles/about/about-ci.css";

const CI = () => {
  return (
    <div className="about__ci">
      <h1>CI</h1>
      <img className="about__ci__img" alt="about_ci_img" src={aboutCiImg} />
      <p className="about__ci__desc">
        <span>
          깨끗한 기름을 형상화하여 폐식용유의 순환과 재활용 과정을 상징적으로
          표현하였습니다.
        </span>
        <span>
          그린과 옐로우 톤을 사용하여 친환경적 이미지를 강조하고, 깨끗한 기름의
          순환이 지속 가능한 미래를 만들어간다는 기업의 비전을 담았습니다.
        </span>
        <span>
          또한, 부드럽게 이어지는 곡선은 자연스럽고 연속적인 순환을 나타내어
          친환경과 책임 있는 기름 관리의 가치를 전달합니다.
        </span>
      </p>
      <a
        role="button"
        className="about__ci__download"
        download
        href={`${process.env.PUBLIC_URL}/favicon.ico`}
      >
        <span>신일푸드 로고 CI 다운로드</span>
        <DownloadIcon />
      </a>
    </div>
  );
};

export default CI;
