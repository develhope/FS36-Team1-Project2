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
        <img src={image} alt={location} id="img-card" />
        <p
          style={{
            fontSize: "13px",
            fontWeight: "500",
            marginTop: "10px",
            marginBottom: "2px",
          }}
        >
          {location}
        </p>
        <div>
          <small
            className="flex"
            style={{ fontSize: "11px", lineHeight: "18px" }}
          >
            {dates}
            <div>·</div>
            {hostType}
          </small>
        </div>
        <div>
          <small className="flex" style={{ fontSize: "11px" }}>
            {price} <div>·</div> <Icons.Star /> {rating}
          </small>
        </div>
      </div>

      <Modal heart={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default Card;
