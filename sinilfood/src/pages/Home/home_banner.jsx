import React from 'react';
import Navbar from '../../components/Navbar'; // Navbar import
import shinliFoodImage from '../../assets/img/SHINLI FOOD white.png'; // SHINLI FOOD 이미지
import phoneIcon from '../../assets/img/phone.png';
import headsetIcon from '../../assets/img/headset.png';
import banner from '../../assets/img/banner.png';

import './home_css/banner.css';

const home_banner = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: 950,
                backgroundImage: `url(${banner})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1920px auto',
                backgroundPosition: 'center',
                position: 'relative',
                minWidth: 1440,
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    width: 1440,
                }}
            >
                <Navbar />
                <div className="main-content" style={{ flex: 1, display: 'flex' }}>
                    <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <div
                            style={{
                                width: 400,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'left',
                                alignItems: 'start',
                            }}
                        >
                            <img src={shinliFoodImage} alt="SHINLI FOOD" />
                            <h1>식용유 및 식품 유통</h1>
                            <h1>
                                전문기업 <span>신일푸드</span>
                            </h1>
                            <p>
                                <strong>신일푸드</strong> 만의 독자적인 전용 물류 시스템으로 전국적 유통 체인망이
                                구축되어 있습니다.
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'end',
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <a href="#contact">
                                <img src={phoneIcon} alt="Phone Icon" />
                            </a>
                            <a href="#contact">
                                <img src={headsetIcon} alt="Headset Icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default home_banner;
