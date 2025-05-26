import Card from './Card';

const cardData = [
  {
    image: 'path/to/image1.jpg',
    label: 'Amato dagli ospiti',
    location: 'Stanza a Lodi - Corvetto',
    dates: '22-24 ago',
    hostType: 'Host privato',
    price: '88 € per 2 notti',
    rating: '4,81'
  },
  {
    image: 'path/to/image2.jpg',
    label: 'Amato dagli ospiti',
    location: 'Stanza a Milano',
    dates: '01-03 ago',
    hostType: 'Host privato',
    price: '107 € per 2 notti',
    rating: '4,77'
  },
  // Aggiungi altre card qui
];

const CardWrapped = () => {
  return (
    <div className="card-wrapper">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          label={card.label}
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
