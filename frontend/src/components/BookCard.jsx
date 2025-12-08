import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BookCard({ book, setBooks, onClick }) {
    const [showActions, setShowActions] = useState(false);
    const navigate = useNavigate();

    if (!book) return null;

    const handleCardClick = () => {
        setShowActions(prev => !prev);
        if (onClick) onClick();
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        if (!window.confirm('정말 삭제하시겠습니까?')) return;

        if (setBooks) {
            setBooks(prev => prev.filter(b => b.id !== book.id));
        }
    };

    const handleEdit = () => {
        navigate(`/edit-book/${book.id}`);
    };

    return (
        <div
            className="book-card"
            onClick={handleCardClick}
        >
            <div className="book-cover">
                <img
                    src={book.cover_img || "/images/default-book.png"}
                    alt="book cover"
                />
            </div>

            <div className="book-info">
                <h3>{book.title || "제목 없음"}</h3>
                <p className="author">저자: {book.author || "정보 없음"}</p>
                <p className="isbn">ISBN: {book.isbn || "정보 없음"}</p>
                <p className="publisher">출판사: {book.publisher || "정보 없음"}</p>
                <p className="genre">장르: {book.genre || "정보 없음"}</p>

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


