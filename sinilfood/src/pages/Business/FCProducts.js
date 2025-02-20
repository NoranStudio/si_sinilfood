import React, { useState, useEffect } from 'react';
import FCProductsDesktop from './FCProductsDesktop';
import FCProductsMobile from './mobile/FCProductsMobile';

function FCProducts() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <FCProductsMobile /> : <FCProductsDesktop />;
}

export default FCProducts;
