import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layout/MainLayout'; // 새로 생성할 레이아웃
import HomePage from './pages/HomePage'; // 기존 App 로직 이동
import AboutPage from './pages/AboutPage'; // 신규 페이지
import CardDetailPage from './pages/CardDetailPage'; // 신규 페이지
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // 신규 페이지

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="cards/:cardName" element={<CardDetailPage />} />
            <Route path="privacy" element={<PrivacyPolicyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;