import { Icons } from "../models/Icons";

function Card({ image, location, dates, hostType, price, rating }) {
  return (
    <>
      <img src={image} style={{ width: "200px" }} />
      <p>{location}</p>
      <div>
        <small>
          {dates} {hostType}
        </small>
      </div>
      <div>
        <small>
          {price} <Icons.Star /> {rating}
        </small>
      </div>
    </>
  );
}

export default Card;
