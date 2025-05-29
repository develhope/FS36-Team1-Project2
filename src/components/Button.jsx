import { useState } from "react";
import { Icons } from "../models/Icons";
import { Color } from "../models/Color";
import { Size } from "../models/Size";
import styles from "../css/Button.module.css";

export default function Button({
  disabled,
  color = Color.Third,
  size = Size.Lg,
  bounce = false,
  icon = Icons.Globe,
  onClick,
}) {
  const [isBouncing, setIsBouncing] = useState(false);
  const [heartAnimation, setHeartAnimation] = useState(false);
  const isBtnHeart = color === Color.Third;

  const classes = [
    styles.btn,
    styles[`btn-${size}`],
    styles[`btn-${color}`],
    disabled && styles["btn-disabled"],
    isBouncing && styles["btn-bounce"],
    heartAnimation && styles[`btn-${Color.Third}-leave`],
  ]
    .filter(Boolean)
    .join(" ");

  function handleClick() {
    if (disabled) return;

    bounceOnClick();
    onClick?.((prev) => !prev);
  }

  function bounceOnClick() {
    if (bounce) {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 300);
    }
  }

  function handleHeartAnimation() {
    if (!isBtnHeart) return;
    setHeartAnimation(true);
    setTimeout(() => setHeartAnimation(false), 550);
  }

  return (
    <>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={classes}
        onMouseLeave={isBtnHeart ? handleHeartAnimation : undefined}
      >
        {icon}
      </button>
    </>
  );
}
