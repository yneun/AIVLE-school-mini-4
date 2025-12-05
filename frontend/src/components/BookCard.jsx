function BookCard({title, author, isbn, publisher}) {
    return (
        <div className="book-card">
            <div className="book-cover">
                <img src={publisher} className="book-cover-img" alt=""/>
            </div>
            <div className="book-info">
                <h3>{title}</h3>
                <p className="author"> 저자: {author}</p>
                <p className="isbn"> ISBN : {isbn}</p>
                <p className="publisher"> 출판사: {publisher}</p>
                <div className="book-actions">
                    <button className="edit">수정</button>
                    <button className="delete">삭제</button>
                </div>
            </div>
        </div>
    )
}

export default BookCard;