import { useEffect, useState } from "react";
import "../css/Card.css";
import { IoIosStar } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";


const Card = ({ image, location, dates, hostType, price, rating }) => {
  // Genera randomicamente la visibilità dell'etichetta
  const showLabel = Math.random() < 0.5; // 50% di probabilità
  console.log(image);

  const [img, setImg] = useState();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleHeartClick = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(image);
        setImg(response.default);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [image]);
  if (error) {
    return (
      <div>
        <p>Errore caricamento immagine</p>
      </div>
    );
  }

  if (loading) {
    <div>
      <p>Loading...</p>
    </div>;
  }
  return (
    <div className="card">
      <div className="card-image">
        <div className="image">
          <img src={img} alt={location} />
        </div>
        {showLabel && <div className="card-label">Amata dagli ospiti</div>}
        <button className="heart-model-button" onClick={handleHeartClick}>
          <GoHeartFill className="heart-icon" />
        </button>
      </div>

      <div className="card-content">
        <h3 className="card-title">{location}</h3>
		<div className="card-info">
        <div>
          {dates}
		  {" ⋅ "}
          {hostType}
        </div>
        <div>
          {price} {" ⋅ "}
          <span className="rating">
            <IoIosStar /> {rating}
          </span>
        </div>
		</div>
      </div>
    </div>
  );
};

export default Card;
