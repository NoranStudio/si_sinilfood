import React, { useState, useEffect } from 'react';
import AppRoutes from './routes';
import FooterDesktop from './components/FooterDesktop';
import FooterMobile from './components/mobile/FooterMobile';
import './assets/styles/global.css';
import './assets/styles/fonts.css';

const App = () => {
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 767px)').matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        const handler = (e) => setIsMobile(e.matches);

        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return (
        <div className="App">
            <AppRoutes />
            {isMobile ? <FooterMobile /> : <FooterDesktop />}
        </div>
    );
};

export default App;
