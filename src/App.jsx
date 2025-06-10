import CarouselWrapped from './components/CarouselWrapped';
import { cardData } from './components/CardData';
import './css/App.css'


function App() {
  return (
    <div className="app-container">
      {Object.entries(cardData).map(([city, data]) => (
        <CarouselWrapped key={city} city={city} data={data} />
      ))}
    </div>
  );
}

export default App;
