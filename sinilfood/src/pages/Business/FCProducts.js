import React, { useState, useEffect } from 'react';
import FCProductsDesktop from './FCProductsDesktop';
import FCProductsMobile from './mobile/FCProductsMobile';
import './FCProducts.css';
import businessBanner from '../../assets/img/business/business_banner.png';
import businessBannerLogistics from '../../assets/img/business/business_banner_logistics.png';

function FCProducts() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [activeTab, setActiveTab] = useState('manufacturing');

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 배너 이미지 선택 로직
    const bannerImage = activeTab === 'logistics' ? businessBannerLogistics : businessBanner;

    return isMobile ? <FCProductsMobile /> : <FCProductsDesktop />;
}

export default FCProducts;
