import { useEffect, useState } from "react";
import "../css/Card.css";

const Card = ({ image, location, dates, hostType, price, rating }) => {
	// Genera randomicamente la visibilità dell'etichetta
	const showLabel = Math.random() < 0.5; // 50% di probabilità
	console.log(image);

	const [img, setImg] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

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
				{showLabel && (
					<div className="card-label">Amata dagli ospiti</div>
				)}
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
