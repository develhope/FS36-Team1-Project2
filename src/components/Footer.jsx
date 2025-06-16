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
} from "../locale/footerConfig";

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
      <hr />
      <div className="flex justify-between">
        <div className="flex align-center">
          <Icons.Copyright />
          <span>2025 Airbnb, Inc.</span>·<a href="#"> Privacy </a>·
          <a href="#"> Termini </a>·<a href="#"> Mappa del sito </a>·
          <a href="#"> Dettagli dell'azienda </a>
        </div>
        <div className="flex align-center" id="link-container">
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
          <div className="flex" id="links">
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
    </>
  );
}
