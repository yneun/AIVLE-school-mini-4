import React, { useState } from 'react';
import { Button } from '@mui/material';

function BookCard({ book, setBooks }) {
    const [showActions, setShowActions] = useState(false);

    const handleCardClick = () => {
        setShowActions(prev => !prev); // 클릭 시 토글
    };

    const handleDelete = () => {
        if (!window.confirm('정말 삭제하시겠습니까?')) return;
        setBooks(prev => prev.filter(b => b.id !== book.id));
    };

    const handleEdit = () => {
        const newTitle = prompt('새 도서 제목을 입력하세요', book.title);
        if (newTitle) {
            setBooks(prev => prev.map(b => b.id === book.id ? { ...b, title: newTitle } : b));
        }
    };

    return (
        <div
            className="book-card"
            style={{
                border: '1px solid #ccc',
                padding: '10px',
                margin: '10px',
                borderRadius: '5px',
                display: 'flex',
                cursor: 'pointer',
                backgroundColor: showActions ? '#f9f9f9' : '#fff'
            }}
            onClick={handleCardClick}
        >
            {/* 좌측 커버 이미지 */}
            <div className="book-cover">
                <img
                    src={book.cover_img || "https://via.placeholder.com/100x150"}
                    alt="book cover"
                    style={{ width: '100px', height: '150px', marginRight: '20px' }}
                />
            </div>

            {/* 우측 상세 정보 */}
            <div className="book-info" style={{ flex: 1 }}>
                <h3>{book.title}</h3>
                <p className="author">저자: {book.author}</p>
                <p className="isbn">ISBN: {book.isbn}</p>
                <p className="publisher">출판사: {book.publisher}</p>
                <p className="genre">장르: {book.genre}</p>

                {/* 수정/삭제 버튼 - 카드 클릭 시만 표시 */}
                {showActions && (
                    <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                        <Button variant="outlined" color="primary" onClick={(e) => { e.stopPropagation(); handleEdit(); }}>
                            수정
                        </Button>
                        <Button variant="outlined" color="error" onClick={(e) => { e.stopPropagation(); handleDelete(); }}>
                            삭제
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookCard;






