import AdBanner from './components/AdBanner';

// Card 데이터 타입 정의
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

function App() {
  // 상태 관리: 뽑힌 카드, 역방향 여부, 로딩 여부, 결과 표시 여부, 상세 설명 표시 여부
  const [drawnCard, setDrawnCard] = useState<Card | null>(null);
  const [isReversed, setIsReversed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  // 카드 뽑기 함수
  const drawCard = () => {
    setShowResult(false);
    setShowDetails(false); // 상세 설명 닫기
    setIsLoading(true);

    // 3초 후 카드 결과 표시
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      const card = tarotCards[randomIndex];
      const reversed = Math.random() < 0.5; // 50% 확률로 역방향
      
      setDrawnCard(card);
      setIsReversed(reversed);
      setIsLoading(false);
      setShowResult(true);
    }, 3000);
  };

  // 초기 화면 렌더링
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

  // 로딩 화면 렌더링
  const renderLoadingView = () => (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">카드를 섞고 있습니다...</p>
    </div>
  );

  // 결과 화면 렌더링
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
    <div className="app-container">
      {!isLoading && !showResult && renderInitialView()}
      {isLoading && renderLoadingView()}
      {!isLoading && showResult && renderResultView()}
      <AdBanner adSlot="YYYYYYYYYY" /> {/* ★★★ 중요: 이 값을 당신의 광고 단위 ID로 교체하세요. ★★★ */}
    </div>
  );
}

export default App;
import './App.css';
import tarotCards from './data/tarot-cards.json';

// Card 데이터 타입 정의
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

function App() {
  // 상태 관리: 뽑힌 카드, 역방향 여부, 로딩 여부, 결과 표시 여부, 상세 설명 표시 여부
  const [drawnCard, setDrawnCard] = useState<Card | null>(null);
  const [isReversed, setIsReversed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  // 카드 뽑기 함수
  const drawCard = () => {
    setShowResult(false);
    setShowDetails(false); // 상세 설명 닫기
    setIsLoading(true);

    // 3초 후 카드 결과 표시
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      const card = tarotCards[randomIndex];
      const reversed = Math.random() < 0.5; // 50% 확률로 역방향
      
      setDrawnCard(card);
      setIsReversed(reversed);
      setIsLoading(false);
      setShowResult(true);
    }, 3000);
  };

  // 초기 화면 렌더링
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

  // 로딩 화면 렌더링
  const renderLoadingView = () => (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">카드를 섞고 있습니다...</p>
    </div>
  );

  // 결과 화면 렌더링
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
    <div className="app-container">
      {!isLoading && !showResult && renderInitialView()}
      {isLoading && renderLoadingView()}
      {!isLoading && showResult && renderResultView()}
    </div>
  );
}

export default App;