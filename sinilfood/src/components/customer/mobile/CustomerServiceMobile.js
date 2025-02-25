import React, { useState } from 'react';
import './CustomerMobile.css';
import ServiceWriteFormMobile from './ServiceWriteFormMobile';

function CustomerServiceMobile() {
    const [selectedMenu, setSelectedMenu] = useState('전용유 제작');
    const [currentPage, setCurrentPage] = useState(1);
    const [isWriting, setIsWriting] = useState(false);
    const [posts, setPosts] = useState({
        '전용유 제작': [],
        사업장폐기물: [],
        일반폐기물: [],
        기타: [],
    });
    const menuItems = ['전용유 제작', '사업장폐기물', '일반폐기물', '기타'];

    const handleSubmit = (formData) => {
        setPosts((prev) => ({
            ...prev,
            [selectedMenu]: [
                {
                    id: prev[selectedMenu].length + 1,
                    title: formData.title,
                    date: new Date().toISOString().split('T')[0],
                    ...formData,
                },
                ...prev[selectedMenu],
            ],
        }));
        setIsWriting(false);
    };

    const currentPosts = posts[selectedMenu];
    const totalPages = Math.ceil(currentPosts.length / 10);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="customer-content-section-mobile">
            <h2 className="customer-title-mobile">고객센터</h2>

            {isWriting ? (
                <ServiceWriteFormMobile onCancel={() => setIsWriting(false)} onSubmit={handleSubmit} />
            ) : (
                <>
                    <div className="service-menu-container-mobile">
                        {menuItems.map((item, index) => (
                            <React.Fragment key={item}>
                                <button
                                    className={`service-menu-item-mobile ${selectedMenu === item ? 'active' : ''}`}
                                    onClick={() => {
                                        setSelectedMenu(item);
                                        setCurrentPage(1);
                                    }}
                                >
                                    {item}
                                </button>
                                {index < menuItems.length - 1 && <div className="service-menu-divider-mobile" />}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="service-board-container-mobile">
                        <div className="service-post-count-mobile">
                            <span>총</span>
                            <span className="service-count-number-mobile">{currentPosts.length}</span>
                            <span>개의 게시물이 있습니다.</span>
                        </div>

                        <div className="service-board-header-mobile">
                            <div className="service-no-mobile">No.</div>
                            <div className="service-title-mobile">제목</div>
                            <div className="service-date-mobile">등록일</div>
                        </div>

                        {currentPosts.slice((currentPage - 1) * 10, currentPage * 10).map((post, index) => (
                            <div key={post.id} className="service-board-item-mobile">
                                <div className="service-no-mobile">
                                    {String(currentPosts.length - ((currentPage - 1) * 10 + index)).padStart(2, '0')}
                                </div>
                                <div className="service-title-mobile">{post.title}</div>
                                <div className="service-date-mobile">{post.date}</div>
                            </div>
                        ))}

                        <div className="service-pagination-wrapper-mobile">
                            <div className="service-board-actions-mobile">
                                <button className="service-write-button-mobile" onClick={() => setIsWriting(true)}>
                                    글쓰기
                                </button>
                            </div>
                            <div className="service-pagination-container-mobile">
                                <div className="service-arrow-box-mobile">
                                    <div className="service-arrow service-arrow-left" />
                                </div>
                                <div className="service-page-buttons-mobile">
                                    {pageNumbers.map((page) => (
                                        <button
                                            key={page}
                                            className={`service-page-button-mobile ${
                                                currentPage === page ? 'active' : ''
                                            }`}
                                            onClick={() => setCurrentPage(page)}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>
                                <div className="service-arrow-box-mobile">
                                    <div className="service-arrow service-arrow-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default CustomerServiceMobile;
