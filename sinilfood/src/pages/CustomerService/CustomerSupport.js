import React, { useState, useEffect } from 'react';
import CustomerSupportDesktop from './CustomerSupportDesktop';
import CustomerSupportMobile from './mobile/CustomerSupportMobile';
import './CustomerSupport.css';

function CustomerSupport() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <CustomerSupportMobile /> : <CustomerSupportDesktop />;
}

export default CustomerSupport;
