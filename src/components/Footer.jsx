import { useState } from "react";
import Button from "./Button";
import { Size } from "../models/Size";
import { Icons } from "../models/Icons";
import { Color } from "../models/Color";
import {
  populars,
  coastals,
  history,
  islands,
  mountains,
  activities,
  categories,
  sections,
  buttons,
} from "../locale/footerConfig";
import "../css/footer.css";

export function Footer() {
  const [showMore, setShowMore] = useState(false);
  const [activeSection, setActiveSection] = useState("popular");

  const mainList = {
    popular: populars,
    coastal: coastals,
    category: categories,
    historic: history,
    island: islands,
    mountain: mountains,
    activity: activities,
  };

  const displayList = showMore
    ? mainList[activeSection]
    : mainList[activeSection]?.slice(0, 17);
  return (
    <>
      <footer className="flex flex-col align-center justify-between">
        <div className="flex flex-col" id="main">
          <h2>Ispirazione per Viaggi futuri</h2>
          <div className="flex flex-col">
            <div className="flex" id="button-container">
              {buttons.map((item, index) => (
                <div key={index}>
                  <button onClick={() => setActiveSection(item.id)}>
                    <span>{item.text}</span>
                    {activeSection === item.id && (
                      <div className="black-line" id={item.id}></div>
                    )}
                  </button>
                </div>
              ))}
            </div>
            <hr
              style={{
                margin: "0 0 10px 0",
              }}
            />
            <ul className="flex">
              {displayList.map((item, index) => (
                <li key={index} className="flex flex-col justify-center">
                  <span>{item.place}</span>
                  <small>{item.text}</small>
                </li>
              ))}
              {activeSection !== "category" && (
                <li className="flex align-center" id="show-more">
                  <button onClick={() => setShowMore((prev) => !prev)}>
                    {showMore ? (
                      <>
                        <span>Mostra meno</span>
                        <Icons.UpArrow />
                      </>
                    ) : (
                      <>
                        <span>Mostra altro</span>
                        <Icons.DownArrow />
                      </>
                    )}
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex" id="section-container">
          {sections.map((section, index) => (
            <section key={index}>
              <h3>{section.title}</h3>
              <div className="flex">
                {section.list && (
                  <ul
                    className="flex flex-col justify-center"
                    id="section-list"
                  >
                    {section.list.map((item, itemIndex) => (
                      <li
                        className="flex flex-col justify-center"
                        key={itemIndex}
                      >
                        <span>{item.key}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.host && (
                  <ul className="flex flex-col justify-center">
                    {section.host.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <span>{item.key}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
        <hr />
        <div className="flex justify-between">
          <div className="flex align-center">
            <Icons.Copyright />
            <span>2025 Airbnb, Inc.</span>·<a href="#"> Privacy </a>·
            <a href="#"> Termini </a>·<a href="#"> Mappa del sito </a>·
            <a href="#"> Dettagli dell'azienda </a>
          </div>
          <div className="flex align-center" id="link-container">
            {/* mettere onClick a questi button per le modali */}
            <Button size={Size.Xs} color={Color.Fifth} bounce={true}>
              <span>Italiano(IT)</span>
            </Button>
            <Button
              size={Size.Xs}
              color={Color.Fifth}
              bounce={true}
              icon={<Icons.Euro />}
            >
              <span>EUR</span>
            </Button>
            <div className="flex align-center" id="links">
              <a href="#" className="flex align-center justify-center">
                <Icons.Facebook />
              </a>
              <a href="#" className="flex align-center justify-center">
                <Icons.Meta />
              </a>
              <a href="#" className="flex align-center justify-center">
                <Icons.Instagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
