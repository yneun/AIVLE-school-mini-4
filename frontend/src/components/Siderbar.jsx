function Sidebar() {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><a href={"#"} className="active"> 전체 도서 </a> </li>
                    <li><a href={"#"} className="active"> 검색 </a> </li>
                    <li><a href={"#"} className="active"> 도서 추가 </a> </li>
                    <li><a href={"#"} className="active"> 도서 수정 </a> </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
