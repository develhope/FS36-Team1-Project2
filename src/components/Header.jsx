import { useState, useEffect, useRef } from "react";
import style from "../css/Header.module.css";
import Button from "./Button";
import Modal from "./Modal";
import { Size } from "../models/Size";
import { Icons } from "../models/Icons";
import { Color } from "../models/Color";
import { HeaderSearchBar } from "./HeaderSearchBar";

export function Header() {
  const componentRef = useRef();
  const [isBouncing, setIsBouncing] = useState("");
  const [guestMenu, setGuestMenu] = useState(false);
  const [becomeHostModal, setBecomeHostModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);

  function handleBounceAnimation() {
    if (isBouncing === "") {
      setIsBouncing("bounce-animation");
      setTimeout(() => setIsBouncing(""), 300);
    }
  }

  function handleClick() {
    handleBounceAnimation();
    setBecomeHostModal((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setGuestMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="flex flex-col align-center">
        <div className="flex justify-between">
          <a href="#" className="flex align-center">
            <Icons.AirBnbLogo className="logo" />
            <span className={style["airbnb-logo"]}>airbnb</span>
          </a>

          <nav className="flex justify-between">
            <div className={`${style["icon-height-adjust"]}`}>
              <a className="flex justify-center align-center" href="#">
                <Icons.House className="logo" />
                <span>Alloggi</span>
              </a>
              <div className={`${style["active-page"]}`}></div>
            </div>
            <div className={`${style["icon-height-adjust"]}`}>
              <a className="flex justify-center align-center" href="#">
                <Icons.AirBalloon className="logo" />
                <span className="header-text-size">Esperienze</span>
              </a>
              {/* <div className={`${style["active-page"]}`}></div> */}
            </div>
            <div className={`${style["icon-height-adjust"]}`}>
              <a className="flex justify-center align-center" href="#">
                <Icons.Bell className="logo" />
                <span className="header-text-size">Servizi</span>
              </a>
              {/* <div className={`${style["active-page"]}`}></div> */}
            </div>
          </nav>

          <div
            className={`flex justify-center align-center ${style["header-button-container"]}`}
          >
            <a className={`flex ${isBouncing}`} href="#" onClick={handleClick}>
              Inizia a ospitare
            </a>
            <div>
              <Button
                size={Size.Md}
                color={Color.First}
                icon={<Icons.Globe />}
                bounce={true}
                onClick={() => setLanguageModal((prev) => !prev)}
              />
            </div>
            <div
              className="flex align"
              style={{
                position: "relative",
              }}
            >
              <Button
                size={Size.Md}
                color={Color.First}
                icon={<Icons.Hamburger />}
                bounce={true}
                onClick={() => setGuestMenu((prev) => !prev)}
              />
              {guestMenu && (
                <ul className="flex flex-col" id={style["guest"]}>
                  <li className="flex align-center">
                    <Icons.Question className="logo" size={"1.3rem"} />
                    <a href="#">Centro Assistenza</a>
                  </li>
                  <hr />
                  <li>
                    <div className="flex justify-between align-center">
                      <button
                        className="flex flex-col"
                        onClick={() => setBecomeHostModal((prev) => !prev)}
                      >
                        <span>
                          <b>Inizia a ospitare</b>
                        </span>
                        <small>
                          Inizia ad ospitare e guadagnare un extra è facile
                        </small>
                      </button>
                      <Icons.House className="logo" />
                    </div>
                  </li>
                  <hr />
                  <li>
                    <a href="#">Trova un co-host</a>
                  </li>
                  <li>
                    <a href="#">Gift Card</a>
                  </li>
                  <hr />
                  <li>
                    <button>
                      <span>Accedi o registrati</span>
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <Modal
          host={becomeHostModal}
          onClose={() => setBecomeHostModal(false)}
        />
        <Modal
          language={languageModal}
          onClose={() => setLanguageModal(false)}
        />

        <HeaderSearchBar />
      </header>
    </>
  );
}
