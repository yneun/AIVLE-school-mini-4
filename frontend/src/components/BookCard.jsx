import React from 'react';

function BookCard({ title, author, isbn, publisher, genre }) {
    return (
        <div className="book-card" style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'row'
        }}>
            <div className="book-cover">
                {/* 출판사의 이미지를 보여주도록 처리 */}
                <img src={publisher} className="book-cover-img" alt="book cover" style={{ width: '100px', height: '150px', marginRight: '20px' }} />
            </div>
            <div className="book-info">
                <h3>{title}</h3>
                <p className="author">저자: {author}</p>
                <p className="isbn">ISBN: {isbn}</p>
                <p className="publisher">출판사: {publisher}</p>
                <p className="genre">장르: {genre}</p>
                <div className="book-actions">
                    <button className="edit">수정</button>
                    <button className="delete">삭제</button>
                </div>
            </div>
        </div>
    );
}

export default BookCard;

