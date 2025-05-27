import Card from './Card';
import { cardData } from '../data/CardData';

const CardWrapped = () => {
  return (
    <div className="card-wrapper">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          location={card.location}
          dates={card.dates}
          hostType={card.hostType}
          price={card.price}
          rating={card.rating}
        />
      ))}
    </div>
  );
};

export default CardWrapped;
