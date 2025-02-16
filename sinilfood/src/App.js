import React from 'react';
import AppRoutes from './routes';
import Footer from './components/Footer';
import './assets/styles/global.css';
import './assets/styles/fonts.css';

const App = () => {
    return (
        <div className="App">
            <AppRoutes />
            <Footer />
        </div>
    );
};

export default App;
