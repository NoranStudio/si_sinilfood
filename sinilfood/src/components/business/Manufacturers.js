import React from 'react';
import './Business.css';
import sponsor1 from '../../assets/img/business/sponsor/sponsor1.png';
import sponsor2 from '../../assets/img/business/sponsor/sponsor2.png';
import sponsor3 from '../../assets/img/business/sponsor/sponsor3.png';
import sponsor4 from '../../assets/img/business/sponsor/sponsor4.png';
import sponsor5 from '../../assets/img/business/sponsor/sponsor5.png';
import sponsor6 from '../../assets/img/business/sponsor/sponsor6.png';
import sponsor7 from '../../assets/img/business/sponsor/sponsor7.png';
import sponsor8 from '../../assets/img/business/sponsor/sponsor8.png';
import sponsor9 from '../../assets/img/business/sponsor/sponsor9.png';
import sponsor10 from '../../assets/img/business/sponsor/sponsor10.png';
import sponsor11 from '../../assets/img/business/sponsor/sponsor11.png';

function Manufacturers() {
    const sponsors = [
        sponsor1,
        sponsor2,
        sponsor3,
        sponsor4,
        sponsor5,
        sponsor6,
        sponsor7,
        sponsor8,
        sponsor9,
        sponsor10,
        sponsor11,
    ];

    return (
        <div className="manufacturers-section">
            <h2 className="manufacturers-title">협력사 및 제조사</h2>
            <div className="sponsors-grid">
                {sponsors.map((sponsor, index) => (
                    <img key={index} src={sponsor} alt={`sponsor ${index + 1}`} className="sponsor-image" />
                ))}
            </div>
        </div>
    );
}

export default Manufacturers;
