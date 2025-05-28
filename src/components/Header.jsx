import style from "../css/Header.module.css";
import Button from "./Button";
import { Modal } from "./Modal";
import { useState } from "react";
import { Size } from "../models/Size";
import { Icons } from "../models/Icons";
import { Color } from "../models/Color";

export function Header() {
  const [isGuestModalVisibile, setIsGuestModalVisible] = useState(false);
  const [isLanguageModalVisibile, setIsLanguageModalVisible] = useState(false);
  const [isBouncing, setIsBouncing] = useState("");
  const logoSize = "3.5rem";

  function handleClick() {
    if (isBouncing === "") {
      setIsBouncing((prev) => (prev = "bounce-animation"));
      setTimeout(() => setIsBouncing(""), 300);
    }
  }

  return (
    <>
      <header className="flex flex-col align-center">
        <div className="flex justify-between">
          <a href="#" className="flex align-center">
            <Icons.AirBnbLogo
              style={{ color: "var(--colorePrimario)" }}
              size={logoSize}
            />
            <span className={style["airbnb-logo"]}>airbnb</span>
          </a>

          <nav className="flex justify-between">
            <div className={`${style["icon-height-adjust"]}`}>
              <a className="flex justify-center align-center" href="#">
                <Icons.House
                  style={{ color: "var(--colorePrimario)" }}
                  size={logoSize}
                />
                <span>Alloggi</span>
              </a>
              <div className={`${style["active-page"]}`}></div>
            </div>
            <div className={`${style["icon-height-adjust"]}`}>
              <a className="flex justify-center align-center" href="#">
                <Icons.AirBalloon
                  style={{ color: "var(--colorePrimario)" }}
                  size={logoSize}
                />
                <span className="header-text-size">Eserienze</span>
              </a>
              {/* <div className={`${style["active-page"]}`}></div> */}
            </div>
            <div className={`${style["icon-height-adjust"]}`}>
              <a className="flex justify-center align-center" href="#">
                <Icons.Bell
                  style={{ color: "var(--colorePrimario)" }}
                  size={`calc(${logoSize} + 0.5rem)`}
                />
                <span className="header-text-size">Servizi</span>
              </a>
              {/* <div className={`${style["active-page"]}`}></div> 
              this active page require a special margin -3 cause bigger icon*/}
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
                className="flex"
                size={Size.Md}
                color={Color.First}
                icon={<Icons.Globe />}
                bounce={true}
                onClick={setIsLanguageModalVisible}
              />
              {isLanguageModalVisibile && <Modal />}
            </div>
            <div className="flex alig">
              <Button
                size={Size.Md}
                color={Color.First}
                icon={<Icons.Hamburger />}
                bounce={true}
                onClick={setIsGuestModalVisible}
              />
              {/* {isGuestModalVisibile && <Modal />} */}
            </div>
          </div>
        </div>
        {/* <div style={{ width: "300px" }}></div> */}
      </header>
    </>
  );
}
