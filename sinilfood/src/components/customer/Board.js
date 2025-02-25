import React, { useState } from 'react';
import './Customer.css';
import ServiceWriteForm from './ServiceWriteForm';

function Board() {
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

    const maskName = (name) => {
        if (!name) return '';
        const firstName = name.charAt(0);
        return firstName + '*'.repeat(2);
    };

    return (
        <div className={`customer-content-section ${isWriting ? 'writing' : ''}`}>
            <h2>사내 자유게시판</h2>
            {!isWriting ? (
                <>
                    <div className="board-container">
                        <div className="board-post-count">
                            <span>총</span>
                            <span className="board-count-number">{posts.length}</span>
                            <span>개의 게시물이 있습니다.</span>
                        </div>
                        <div className="board-header">
                            <span className="board-no">No.</span>
                            <span className="board-title">제목</span>
                            <span className="board-date">날짜</span>
                            <span className="board-author">이름</span>
                            <span className="board-views">조회수</span>
                        </div>
                        <div className="board-list">
                            {currentPagePosts.map((post) => (
                                <div key={post.no} className="board-item">
                                    <span className="board-no">{post.no}</span>
                                    <span className="board-title">{post.title}</span>
                                    <span className="board-date">{post.date}</span>
                                    <span className="board-author">{maskName(post.author)}</span>
                                    <span className="board-views">{post.views}</span>
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

export default Board;
