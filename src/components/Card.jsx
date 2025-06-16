import "../css/Card.css";
import Button from "./Button";
import { Icons } from "../models/Icons";
import { useState } from "react";
import Modal from "../components/Modal";

const Card = ({ image, location, dates, hostType, price, rating }) => {
  const [showForm, setShowForm] = useState(false);
  const showLabel = Math.random() < 0.5;

  return (
    <>
      <div className="flex flex-col" id="card-container">
        <div className="flex justify-between align-center card-header ">
          <Button icon={<Icons.Heart />} />
          {showLabel && (
            <div className="flex align-center label">Amato dagli ospiti</div>
          )}
        </div>
        <img src={image} alt={location} />
        <p>{location}</p>
        <div>
          <small className="flex">
            {dates}
            <div>·</div>
            {hostType}
          </small>
        </div>
        <div>
          <small className="flex">
            {price} <div>·</div> <Icons.Star /> {rating}
          </small>
        </div>
      </div>

      <Modal heart={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default Card;
