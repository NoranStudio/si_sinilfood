import React from 'react';
import './BusinessMobile.css';
import type1 from '../../../assets/img/business/mobile/type/type1.png';
import type2 from '../../../assets/img/business/mobile/type/type2.png';
import type3 from '../../../assets/img/business/mobile/type/type3.png';
import type4 from '../../../assets/img/business/mobile/type/type4.png';

function OilTypesMobile() {
    const types = [
        {
            image: type1,
            title: '대두유',
            subtitle: 'SOYBEAN OIL',
            description:
                '대두의 주산지는 미국, 남미 등이고 그 대부분은 착유 원료로한다. 담황색이며 냄새가 없고 맛도 구수하다. 콩기름은 리놀산·올레산 등 불포화 지방산을 많이 함유하고 있고 인체에 필수적인 지방산이다. 식품공업 원료로, 또한 일부 가공하여 도료, 바니시 등에 사용된다.',
        },
        {
            image: type2,
            title: '카놀라유',
            subtitle: 'CANOLA',
            description:
                '유채씨는 북부유럽과 시베리아에서 많이 재배된다. 낮은 온도 에서 잘 응결되지 않고, 빛에 영향을 잘 받지 않는 성질이 있다. 튀김을 하면 오랫동안 바삭바삭 하고, 산화 안정성 및 가열 안정성이 매우 우수하다. 토코페롤 및 올레산 함량이 높아 노화방지, 심장병, 암, 당뇨병, 고혈압에 걸릴 위험을 줄인다는 연구 결과가 보고되어 있다.',
        },
        {
            image: type3,
            title: '옥수수유',
            subtitle: 'CORN OIL',
            description:
                '옥수수 씨앗에서 출출한 식물성 오일이다. 고온에서도 산화되지 않고 안정성을 유지한다. 오메가-6 지방산과 비타민 E를 풍부하게 함유하고 있어 심혈관 건강을 개선하고 항산화 효과를 제공해서 세포손상 예방하고 노화를 지연시키는데 도움이 된다.',
        },
        {
            image: type4,
            title: '해바라기유',
            subtitle: 'SOYBEAN OIL',
            description:
                '순한 맛과 높은 발연점을 가진 오일로 다양한 용도로 활용 가능하다. 맛을 중립적으로 유지하면서도 고온에서 안정적인 성질을 가진 오일이다. 불포화 자방 및 비타민 E와 A가 풍부하다. 항산화 작용을 하여 세포를 보호하고 면역체계를 강화하며 피부와 눈 건간에도 도움을 준다.',
        },
    ];

    return (
        <div className="oil-types-section-mobile">
            <h2 className="oil-types-title-mobile">업소용 식용류</h2>
            <div className="oil-type-boxes-mobile">
                {types.map((type, index) => (
                    <div className="oil-type-box-mobile" key={index}>
                        <img src={type.image} alt={type.title} className="oil-type-image-mobile" />
                        <div className="oil-type-content-mobile">
                            <div className="oil-type-header-mobile">
                                <h3 className="oil-type-title-mobile">{type.title}</h3>
                                <span className="oil-type-subtitle-mobile">{type.subtitle}</span>
                            </div>
                            <p className="oil-type-description-mobile">{type.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OilTypesMobile;
