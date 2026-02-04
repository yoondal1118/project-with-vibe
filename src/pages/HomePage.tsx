import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import tarotCards from '../data/tarot-cards.json';

// Card 데이터 타입 정의 (App.tsx에서 가져옴)
interface Card {
  id: number;
  name: string;
  image: string;
  meanings: {
    upright: string;
    reversed: string;
  };
  keywords: string[];
  detailed_description: {
    upright: string;
    reversed: string;
  };
}

function HomePage() {
  const [drawnCard, setDrawnCard] = useState<Card | null>(null);
  const [isReversed, setIsReversed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const drawCard = () => {
    setShowResult(false);
    setShowDetails(false);
    setIsLoading(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      const card = tarotCards[randomIndex];
      const reversed = Math.random() < 0.5;
      
      setDrawnCard(card);
      setIsReversed(reversed);
      setIsLoading(false);
      setShowResult(true);
    }, 2000);
  };

  const renderInitialView = () => (
    <>
      <header>
        <h1 className="main-header">오늘의 타로</h1>
        <p className="sub-header">당신의 하루를 위한 영적인 조언을 얻어보세요.</p>
      </header>
      <button className="draw-button" onClick={drawCard}>
        카드 뽑기
      </button>
    </>
  );

  const renderLoadingView = () => (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">카드를 섞고 있습니다...</p>
    </div>
  );

  const renderResultView = () => (
    drawnCard && (
      <>
        <div className="result-card">
          <img
            src={drawnCard.image}
            className={`card-image ${isReversed ? 'reversed' : ''}`}
            alt={drawnCard.name}
          />
          <div className="card-details">
            <h2 className="card-name">{drawnCard.name}</h2>
            <p className="card-orientation">
              {isReversed ? '역방향' : '정방향'}
            </p>
            <p className="card-meaning">
              <strong>한 줄 의미:</strong> {isReversed ? drawnCard.meanings.reversed : drawnCard.meanings.upright}
            </p>
            <p className="card-keywords">
              <strong>키워드:</strong> {drawnCard.keywords.join(', ')}
            </p>
            <button className="details-button" onClick={() => setShowDetails(!showDetails)}>
              {showDetails ? '숨기기' : '자세히 보기'}
            </button>
            <div className={`details-panel ${showDetails ? 'show' : ''}`}>
              <p>
                {isReversed ? drawnCard.detailed_description.reversed : drawnCard.detailed_description.upright}
              </p>
            </div>
          </div>
        </div>
        <button className="draw-button" style={{ marginTop: '2rem' }} onClick={drawCard}>
          다시 뽑기
        </button>
      </>
    )
  );

  return (
    <div className="page-container home-page">
      <Helmet>
        <title>오늘의 타로 - 무료 타로점으로 하루 운세 보기</title>
        <meta name="description" content="오늘의 타로 카드를 뽑아 하루의 운세를 점쳐보세요. 무료 타로점으로 오늘의 사랑운, 직업운, 금전운에 대한 조언을 얻을 수 있습니다." />
      </Helmet>
      {!isLoading && !showResult && renderInitialView()}
      {isLoading && renderLoadingView()}
      {!isLoading && showResult && renderResultView()}
    </div>
  );
}

export default HomePage;
