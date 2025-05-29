import { useState } from "react";
import style from "../css/Modal.module.css";
import { Icons } from "../models/Icons";

export function Modal({ guestVisible, languageVisible }) {
  const [] = useState(false);
  return (
    <>
      {guestVisible && (
        <ul className="flex flex-col" id={style["guest"]}>
          <li className="flex align-center">
            <Icons.Question className="logo" size={"1.3rem"} />
            <a href="#">Centro Assistenza</a>
          </li>
          <hr />
          <li>
            <div className="flex justify-between align-center">
              <button>
                <span>
                  <b>Inizia a ospitare</b>
                </span>
                <small>Inizia ad ospitare e guadagnare un extra è facile</small>
              </button>
              <Icons.House className="logo" size={"5rem"} />
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
              {/* qui andrà il registration modal */}
            </button>
          </li>
        </ul>
      )}
      {languageVisible && (
        <div id={style["language"]}>
          <a>ciao secondo contenitore</a>
          <hr />
        </div>
      )}
    </>
  );
}
