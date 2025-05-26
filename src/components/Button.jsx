import { useState } from "react";
import { Icons } from "../models/Icons";
import { Color } from "../models/Color";
import styles from "../css/Button.module.css";

export default function Button({
  disabled,
  type = "button",
  color = Color.Tertiary,
  size = "md",
  className = "",
  bounce = false,
}) {
  const [isBouncing, setIsBouncing] = useState(false);
  const [heartAnimation, setHeartAnimation] = useState();
  const isBtnHeart = color === Color.Tertiary;

  const classes = [
    styles.btn,
    styles[`btn-${size}`],
    styles[`btn-${color}`],
    disabled && styles["btn-disabled"],
    isBouncing && styles["btn-bounce"],
    heartAnimation && styles[heartAnimation],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  function handleClick(event) {
    if (disabled) return;

    bounceOnClick();
  }

  function bounceOnClick() {
    if (bounce) {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 300);
    }
  }

  function handleHeartAnimation() {
    setHeartAnimation(`btn-${Color.Tertiary}-leave`);
    setTimeout(() => setHeartAnimation(""), 550);
  }

  return (
    <>
      <button
        type={type}
        onClick={handleClick}
        disabled={disabled}
        className={classes}
        {...(isBtnHeart ? { onMouseLeave: handleHeartAnimation } : {})}
      >
        {Icons.AirBnbLogo}
        {Icons.House}
      </button>
    </>
  );
}
