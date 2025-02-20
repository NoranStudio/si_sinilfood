import React, { useState, useEffect } from 'react';
import DesktopNavbar from './DesktopNavbar';
import NavbarMobile from './mobile/NavbarMobile';

function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <NavbarMobile /> : <DesktopNavbar />;
}

export default Navbar;
