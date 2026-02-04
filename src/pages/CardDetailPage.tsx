import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import tarotCards from '../data/tarot-cards.json';

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

function CardDetailPage() {
  const { cardName } = useParams<{ cardName: string }>();
  const navigate = useNavigate();
  const [card, setCard] = useState<Card | null>(null);
  const [isReversed, setIsReversed] = useState<boolean>(false);

  useEffect(() => {
    // URL slug를 원래 카드 이름으로 변환 (예: The-Fool -> The Fool)
    const formattedCardName = cardName?.replace(/-/g, ' ');
    const foundCard = tarotCards.find(c => c.name.toLowerCase() === formattedCardName?.toLowerCase());

    if (foundCard) {
      setCard(foundCard);
      // 카드 상세 페이지에서는 정/역방향을 랜덤으로 결정하거나 기본값을 줍니다.
      // 여기서는 일단 정방향을 기본으로 하고, 필요하다면 랜덤 로직을 추가할 수 있습니다.
      setIsReversed(Math.random() < 0.5);
    } else {
      // 카드를 찾을 수 없으면 홈으로 리다이렉트
      navigate('/');
    }
  }, [cardName, navigate]);

  if (!card) {
    return <div className="page-container card-detail-page">카드를 불러오는 중...</div>; // 로딩 또는 에러 처리
  }

  const currentMeaning = isReversed ? card.meanings.reversed : card.meanings.upright;
  const currentDescription = isReversed ? card.detailed_description.reversed : card.detailed_description.upright;

  return (
    <div className="page-container card-detail-page">
      <Helmet>
        <title>{`${card.name} 타로 카드 의미 - 오늘의 운세`}</title>
        <meta name="description" content={`"${card.name}" 타로 카드의 정방향, 역방향 의미와 키워드, 상세 해설을 확인하세요. 무료 타로점으로 오늘의 운세를 점쳐보세요.`} />
      </Helmet>

      <h1 className="page-title"><span>{card.name}</span> <span className="card-orientation">{isReversed ? '역방향' : '정방향'}</span></h1>
      <div className="card-detail-content">
        <img src={card.image} alt={card.name} className={`card-image-detail ${isReversed ? 'reversed' : ''}`} />
        <div className="card-text-content">
          <p className="card-meaning-detail"><strong>한 줄 의미:</strong> {currentMeaning}</p>
          <p className="card-keywords-detail"><strong>키워드:</strong> {card.keywords.join(', ')}</p>
          <div className="detailed-description-box">
            <h3>상세 해설</h3>
            <p>{currentDescription}</p>
          </div>
        </div>
      </div>
      <button className="back-button" onClick={() => navigate('/')}>홈으로 돌아가기</button>
    </div>
  );
}

export default CardDetailPage;
