

const Card = ({ image, location, dates, hostType, price, rating }) => {
  // Genera randomicamente la visibilità dell'etichetta
  const showLabel = Math.random() < 0.5; // 50% di probabilità

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={location} />
        {showLabel && <div className="card-label">Amata dagli ospiti</div>}
      </div>
      <div className="card-content">
        <h3>{location}</h3>
        <p>{dates}</p>
        <p>{hostType}</p>
        <p>{price}</p>
        <p>★ {rating}</p>
      </div>
    </div>
  );
};

export default Card;
