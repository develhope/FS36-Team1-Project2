import style from "../css/HeaderSearchBar.module.css";
import { headerSearchBarConfig } from "../locale/headerSearchBarConfig";
import { Size } from "../models/Size";
import { Icons } from "../models/Icons";
import { Color } from "../models/Color";
import { useEffect, useState, useRef } from "react";
import Button from "./Button";
import { Calendar } from "./Calendar";
import Modal from "./Modal";

export function HeaderSearchBar() {
  const componentRef = useRef(null);
  const [isDogOpen, setIsDogOpen] = useState(false);

  const [activeButton, setActiveButton] = useState(null);
  const [extraDays, setExtraDays] = useState(0);

  const defaulDays = "Aggiungi date";
  const [firstDay, setFirstDay] = useState(defaulDays);
  const [lastDay, setLastDay] = useState(defaulDays);

  const defaultGuestValue = "Aggiungi ospiti";
  const [guestText, setGuestText] = useState(defaultGuestValue);

  const [guests, setGuests] = useState({
    adult: 0,
    children: 0,
    newBorn: 0,
    animal: 0,
  });

  function updateGuestCount(guest, value) {
    setGuests((prev) => ({
      ...prev,
      [guest]: prev[guest] + value,
    }));
  }

  useEffect(() => {
    let text = defaultGuestValue;
    const totalGuests = guests.adult + guests.children;

    totalGuests
      ? (text = `${totalGuests} ${totalGuests === 1 ? "ospite" : "ospiti"}`)
      : defaultGuestValue;

    setGuestText(text);

    if (
      guests.adult === 0 &&
      (guests.children > 0 || guests.newBorn > 0 || guests.animal > 0)
    ) {
      setGuests((prev) => ({ ...prev, adult: 1 }));
    }
  }, [guests]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setActiveButton(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const disableGuest = {
    adult: guests.adult === 0,
    children: guests.children === 0,
    newBorn: guests.newBorn === 0,
    animal: guests.animal === 0,
  };

  const maxValue = {
    adult: guests.adult === 16,
    children: guests.children === 15,
    newBorn: guests.newBorn === 5,
    animal: guests.animal === 5,
  };

  return (
    <>
      <div
        ref={componentRef}
        className={`flex align-center ${style["wrapper"]} ${
          activeButton && style["wrapper-active"]
        }`}
      >
        <div
          className={`flex flex-col ${
            activeButton === "where" ? style["active"] : ""
          }`}
          id={style["where"]}
          onClick={() => setActiveButton("where")}
        >
          <label htmlFor="destinazione">Dove</label>
          <input type="search" placeholder="Cerca destinazioni" name="" id="" />

          {activeButton === "where" && (
            <section className={style[`${activeButton}-section`]}>
              <>
                <small>Destinazioni suggerite</small>
                <ul>
                  {headerSearchBarConfig.map(
                    ({ id, png, place, small, otherText }) => (
                      <li key={id} className="flex">
                        <img src={png} alt={id} />
                        <div className="flex flex-col justify-center">
                          <span>{place}</span>
                          <small>{small}</small>
                          {otherText && <small>{otherText}</small>}
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </>
            </section>
          )}
        </div>

        <div
          className={`flex ${
            activeButton === "check-in" ? style["active"] : ""
          }`}
          id={style["check-in-container"]}
        >
          <button
            className="flex flex-col justify-center"
            id={style["check-in"]}
            onClick={() => setActiveButton("check-in")}
          >
            <span>
              <b>Check-in</b>
            </span>
            <span className="flex justify-between">
              {firstDay}
              <div className="flex align-center">
                {extraDays !== 0 ? (
                  <>
                    <Icons.PlusMinus />
                    {extraDays}
                  </>
                ) : null}
              </div>
            </span>
          </button>
          {activeButton === "check-in" && (
            <div id={style["calendar-wrapper"]}>
              <Calendar
                daysModifier={setExtraDays}
                firstSelected={setFirstDay}
                lastSelected={setLastDay}
                noSelect={defaulDays}
              />
            </div>
          )}
        </div>
        <div
          className={`flex ${
            activeButton === "check-out" ? style["active"] : ""
          }`}
          id={style["check-out-container"]}
        >
          <button
            className="flex flex-col justify-center"
            id={style["check-out"]}
            onClick={() => setActiveButton("check-out")}
          >
            <span>
              <b>Check-out</b>
            </span>
            <span className="flex justify-between">
              {lastDay}
              <div className="flex align-center">
                {extraDays !== 0 ? (
                  <>
                    <Icons.PlusMinus />
                    {extraDays}
                  </>
                ) : null}
              </div>
            </span>
          </button>
          {activeButton === "check-out" && (
            <Calendar
              daysModifier={setExtraDays}
              firstSelected={setFirstDay}
              lastSelected={setLastDay}
              noSelect={defaulDays}
            />
          )}
        </div>
        <div
          role="button"
          className={`flex align-center justify-between ${
            activeButton === "who" ? style["active"] : ""
          }`}
          id={style["who"]}
          onClick={() => setActiveButton("who")}
        >
          <div className="flex flex-col">
            <span>
              <b>Chi</b>
            </span>
            <span>{guestText}</span>
            {activeButton === "who" && (
              <section className="flex flex-col justify-between">
                <div className="flex justify-between adult">
                  <div>
                    <h3>Adulti</h3>
                    <small>Da 13 anni in su</small>
                  </div>
                  <div
                    className={`flex justify-between align-center ${style["btn-container"]}`}
                  >
                    <button
                      disabled={disableGuest.adult}
                      className={disableGuest.adult ? style["disabled"] : ""}
                      onClick={() => updateGuestCount("adult", -1)}
                    >
                      <Icons.MinusCircle />
                    </button>
                    <span>{guests.adult}</span>
                    <button
                      disabled={maxValue.adult}
                      className={maxValue.adult ? style["disabled"] : ""}
                      onClick={() => updateGuestCount("adult", 1)}
                    >
                      <Icons.PlusCircle />
                    </button>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between children">
                  <div>
                    <h3>Bambini</h3>
                    <small>Da 2 a 12 anni</small>
                  </div>
                  <div
                    className={`flex justify-between align-center ${style["btn-container"]}`}
                  >
                    <button
                      disabled={disableGuest.children}
                      className={disableGuest.children ? style["disabled"] : ""}
                      onClick={() => updateGuestCount("children", -1)}
                    >
                      <Icons.MinusCircle />
                    </button>
                    <span>{guests.children}</span>
                    <button
                      disabled={maxValue.children}
                      className={maxValue.children ? style["disabled"] : ""}
                      onClick={() => updateGuestCount("children", 1)}
                    >
                      <Icons.PlusCircle />
                    </button>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between new-born">
                  <div>
                    <h3>Neonati</h3>
                    <small>Fino a 2 anni</small>
                  </div>
                  <div
                    className={`flex justify-between align-center ${style["btn-container"]}`}
                  >
                    <button
                      disabled={disableGuest.newBorn}
                      className={disableGuest.newBorn ? style["disabled"] : ""}
                      onClick={() => updateGuestCount("newBorn", -1)}
                    >
                      <Icons.MinusCircle />
                    </button>
                    <span>{guests.newBorn}</span>
                    <button
                      disabled={maxValue.newBorn}
                      className={maxValue.newBorn ? style["disabled"] : ""}
                      onClick={() => updateGuestCount("newBorn", 1)}
                    >
                      <Icons.PlusCircle />
                    </button>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between animals">
                  <div>
                    <h3>Animali domestici</h3>
                    <span onClick={() => setIsDogOpen((prev) => !prev)}>
                      Viaggi con un animale di servizio?
                    </span>
                  </div>
                  <div
                    className={`flex justify-between align-center ${style["btn-container"]}`}
                  >
                    <button
                      disabled={disableGuest.animal}
                      className={disableGuest.animal ? style["disabled"] : ""}
                      onClick={() => updateGuestCount("animal", -1)}
                    >
                      <Icons.MinusCircle />
                    </button>
                    <span>{guests.animal}</span>
                    <button
                      disabled={maxValue.animal}
                      className={maxValue.animal ? style["disabled"] : ""}
                      onClick={() => updateGuestCount("animal", 1)}
                    >
                      <Icons.PlusCircle />
                    </button>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>

        <Button
          size={Size.Lg}
          color={Color.Second}
          icon={<Icons.Search />}
          isActive={activeButton ? true : false}
        >
          {activeButton && <span> Cerca </span>}
        </Button>
      </div>

      <Modal dog={isDogOpen} onClose={() => setIsDogOpen(false)} />
    </>
  );
}
