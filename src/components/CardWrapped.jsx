import Card from "./Card";

const CardWrapped = ({ data }) => {
  return (
    <div className="card-wrapper">
      {data.map((card, index) => (
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
    </div> //ciao
  );
};

export default CardWrapped;
