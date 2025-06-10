import CardWrapped from "../components/CardWrapped";
import '../css/carouselWrapped.css'

const cityTitles = {
  Milano: "Milano: alloggi popolari",
  Roma: "Roma: disponibili questo week end",
  Napoli: "Napoli: alloggi",
  Torino: "Torino: disponibili il prossimo mese",
  Barcellona: "Barcellona: alloggi",
  Parigi: "Parigi: disponibili il prossimo mese",
  Bologna: "Bologna: tutti gli alloggi disponibili",
  Firenze: "Firenze: scopri gli alloggi",
  Budapest: "Budapest: alloggi popolari"
};

export default function CarouselWrapped({ city, data }) {
  return (
    <div className="carousel-section">
      <div>
      <h1 className="city-title">{cityTitles[city] || `${city}: alloggi popolari`}</h1>
      </div>
      <div className="cards-container">
        <CardWrapped data={data} />
      </div>
    </div>
  );
};
