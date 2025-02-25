import React, { useState } from 'react';
import './Customer.css';

function News() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    const [posts] = useState([
        {
            no: '12',
            title: '안녕하세요. 주식회사 신일푸드입니다.',
            date: '2024-10-22',
            author: '(주)신일푸드',
            views: 12,
        },
        {
            no: '11',
            title: '안녕하세요. 주식회사 신일푸드입니다.',
            date: '2024-10-22',
            author: '(주)신일푸드',
            views: 12,
        },
        {
            no: '10',
            title: '안녕하세요. 주식회사 신일푸드입니다.',
            date: '2024-10-22',
            author: '(주)신일푸드',
            views: 12,
        },
        {
            no: '09',
            title: '안녕하세요. 주식회사 신일푸드입니다.',
            date: '2024-10-22',
            author: '(주)신일푸드',
            views: 12,
        },
        {
            no: '08',
            title: '안녕하세요. 주식회사 신일푸드입니다.',
            date: '2024-10-22',
            author: '(주)신일푸드',
            views: 12,
        },
        {
            no: '07',
            title: '안녕하세요. 주식회사 신일푸드입니다.',
            date: '2024-10-22',
            author: '(주)신일푸드',
            views: 12,
        },
        {
            no: '06',
            title: '안녕하세요. 주식회사 신일푸드입니다.',
            date: '2024-10-22',
            author: '(주)신일푸드',
            views: 12,
        },
        {
            no: '05',
            title: '안녕하세요. 주식회사 신일푸드입니다.',
            date: '2024-10-22',
            author: '(주)신일푸드',
            views: 12,
        },
        {
            no: '04',
            title: '안녕하세요. 주식회사 신일푸드입니다.',
            date: '2024-10-22',
            author: '(주)신일푸드',
            views: 12,
        },
        {
            no: '03',
            title: '안녕하세요. 주식회사 신일푸드입니다.',
            date: '2024-10-22',
            author: '(주)신일푸드',
            views: 12,
        },
        {
            no: '02',
            title: '안녕하세요. 주식회사 신일푸드입니다.',
            date: '2024-10-22',
            author: '(주)신일푸드',
            views: 12,
        },
        {
            no: '01',
            title: '안녕하세요. 주식회사 신일푸드입니다.',
            date: '2024-10-22',
            author: '(주)신일푸드',
            views: 12,
        },
    ]);

    const currentPagePosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    return (
        <div className="customer-content-section">
            <h2>사내 자유게시판</h2>
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
                            <span className="board-author">{post.author}</span>
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
                </div>
            </div>
        </div>
    );
}

export default News;
