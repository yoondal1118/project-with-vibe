import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import tarotCards from '../data/tarot-cards.json';
import '../App.css'; 

function CardsPage() {
  return (
    <div className="page-container cards-page">
      <Helmet>
        <title>전체 타로 카드 목록 (78장) - 무료 타로 운세</title>
        <meta name="description" content="78장의 전체 타로 카드 목록과 각 카드의 의미를 확인해보세요. 메이저, 마이너 아르카나 카드의 상세한 해석과 함께 오늘의 운세를 점쳐보세요." />
      </Helmet>
      
      <h1 className="page-title">타로 카드 도감</h1>
      <p className="page-description">
        78장의 타로 카드를 통해 당신의 운명과 내면을 탐구해보세요.
      </p>

      <div className="cards-grid">
        {tarotCards.map((card) => (
          <Link to={`/cards/${card.slug}`} key={card.id} className="card-item-link">
            <div className="card-item">
              <div className="card-image-wrapper">
                <img 
                  src={card.image} 
                  alt={card.name} 
                  loading="lazy" 
                  className="card-thumbnail"
                />
              </div>
              <h3 className="card-name">{card.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardsPage;
