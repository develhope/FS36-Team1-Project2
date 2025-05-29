import CarouselWrapped from "./components/CarouselWrapped";
import { cardData } from "./data/CardData";

function App() {
  return (
    <div className="app">
      {Object.keys(cardData).map((city, index) => (
        <CarouselWrapped key={index} city={city} data={cardData[city]} />
      ))}
    </div>
  );
}

export default App;
