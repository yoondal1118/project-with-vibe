import { Outlet, Link } from 'react-router-dom';
import '../App.css'; // 공통 스타일

function MainLayout() {

  return (
    <div className="main-layout">
      <nav className="navbar">
        <Link to="/" className="nav-brand">오늘의 타로</Link>
        <div className="nav-links">
          <Link to="/about" className="nav-item">타로란?</Link>
          <Link to="/cards" className="nav-item">카드 목록</Link>
          <Link to="/privacy" className="nav-item">개인정보처리방침</Link>
        </div>
      </nav>

      <main className="content-area">
        <Outlet /> {/* 라우팅된 페이지 컴포넌트가 여기에 렌더링됩니다 */}
      </main>

      <footer className="footer">
        <p>&copy; 2026 오늘의 타로. All rights reserved.</p>
        {/* <AdBanner adSlot={AD_SLOT_ID} /> */}
      </footer>
    </div>
  );
}

export default MainLayout;
