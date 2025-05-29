import CardWrapped from "../components/CardWrapped";

const CarouselWrapped = ({ city, data }) => {
  return (
    <div className="carousel-section">
      <h1>{city}: alloggi popolari</h1>
      <div className="carousel">
        <CardWrapped data={data} />
      </div>
    </div>
  );
};

export default CarouselWrapped;
