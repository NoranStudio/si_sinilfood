import React, { useState } from 'react';
import './Customer.css';
import ServiceWriteForm from './ServiceWriteForm';

function CustomerService() {
    const [selectedMenu, setSelectedMenu] = useState('전용유 제작');
    const [currentPage, setCurrentPage] = useState(1);
    const [isWriting, setIsWriting] = useState(false);
    const [posts, setPosts] = useState({
        '전용유 제작': [],
        사업장폐기물: [],
        일반폐기물: [],
        기타: [],
    });
    // 한 페이지당 10개의 게시글
    const postsPerPage = 10;

    const menuItems = [
        { id: '전용유 제작', text: '전용유 제작' },
        { id: '사업장폐기물', text: '사업장폐기물(회수유)' },
        { id: '일반폐기물', text: '일반폐기물(회수유)' },
        { id: '기타', text: '기타' },
    ];

    const currentPosts = posts[selectedMenu] || [];

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPagePosts = currentPosts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(currentPosts.length / postsPerPage);

    const handleSubmit = (formData) => {
        const newPost = {
            no: String(currentPosts.length + 1).padStart(2, '0'),
            title: formData.title,
            date: formData.date,
        };

        setPosts({
            ...posts,
            [selectedMenu]: [newPost, ...posts[selectedMenu]],
        });
        setIsWriting(false);
    };

    return (
        <div className={`customer-content-section ${isWriting ? 'writing' : ''}`}>
            <h2>고객센터</h2>
            {!isWriting ? (
                <>
                    <div className="service-menu-container">
                        {menuItems.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <button
                                    className={`service-menu-item ${selectedMenu === item.id ? 'active' : ''}`}
                                    onClick={() => setSelectedMenu(item.id)}
                                >
                                    {item.text}
                                </button>
                                {index < menuItems.length - 1 && <div className="service-menu-divider" />}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="service-board-container">
                        <div className="service-post-count">
                            <span className="service-count-text">총</span>
                            <span className="service-count-number">{currentPosts.length}</span>
                            <span className="service-count-text">개의 게시물이 있습니다.</span>
                        </div>
                        <div className="service-board-header">
                            <span className="service-no">No.</span>
                            <span className="service-title">제목</span>
                            <span className="service-date">등록일</span>
                        </div>
                        <div className="service-board-list">
                            {currentPagePosts.map((post) => (
                                <div key={post.no} className="service-board-item">
                                    <span className="service-no">{post.no}</span>
                                    <span className="service-title">{post.title}</span>
                                    <span className="service-date">{post.date}</span>
                                </div>
                            ))}
                        </div>
                        <div className="service-pagination-container">
                            <div
                                className="service-arrow-box"
                                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                            >
                                <div className="service-arrow service-arrow-left"></div>
                            </div>
                            <div className="service-page-buttons">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i + 1}
                                        className={`service-page-button ${currentPage === i + 1 ? 'active' : ''}`}
                                        onClick={() => setCurrentPage(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                            <div
                                className="service-arrow-box"
                                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                            >
                                <div className="service-arrow service-arrow-right"></div>
                            </div>
                            <button className="service-write-button" onClick={() => setIsWriting(true)}>
                                글쓰기
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <ServiceWriteForm onCancel={() => setIsWriting(false)} onSubmit={handleSubmit} />
            )}
        </div>
    );
}

export default CustomerService;
