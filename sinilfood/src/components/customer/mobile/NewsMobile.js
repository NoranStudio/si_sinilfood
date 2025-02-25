import React, { useState } from 'react';
import '../Customer.css';
import ServiceWriteFormMobile from './ServiceWriteFormMobile';

function NewsMobile() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isWriting, setIsWriting] = useState(false);
    const [posts, setPosts] = useState([]);
    const postsPerPage = 10;

    const handleSubmit = (formData) => {
        const newPost = {
            no: String(posts.length + 1).padStart(2, '0'),
            title: formData.title,
            author: formData.name,
            views: 0,
            date: formData.date,
        };

        setPosts([newPost, ...posts]);
        setIsWriting(false);
    };

    const currentPagePosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    return (
        <div className="customer-content-section-mobile">
            <h2 className="customer-title-mobile">새소식</h2>
            {!isWriting ? (
                <>
                    <div className="service-board-container-mobile">
                        <div className="service-post-count-mobile">
                            <span>총</span>
                            <span className="service-count-number-mobile">{posts.length}</span>
                            <span>개의 게시물이 있습니다.</span>
                        </div>
                        <div className="service-board-header-mobile">
                            <div className="service-no-mobile">No.</div>
                            <div className="service-title-mobile">제목</div>
                            <div className="service-date-mobile">등록일</div>
                        </div>
                        {currentPagePosts.map((post) => (
                            <div key={post.no} className="service-board-item-mobile">
                                <div className="service-no-mobile">{post.no}</div>
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
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i + 1}
                                            className={`service-page-button-mobile ${
                                                currentPage === i + 1 ? 'active' : ''
                                            }`}
                                            onClick={() => setCurrentPage(i + 1)}
                                        >
                                            {i + 1}
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
            ) : (
                <ServiceWriteFormMobile onCancel={() => setIsWriting(false)} onSubmit={handleSubmit} />
            )}
        </div>
    );
}

export default NewsMobile;
