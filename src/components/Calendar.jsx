import { Icons } from "../models/Icons";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import style from "../css/Calendar.module.css";

export function Calendar({
  daysModifier,
  firstSelected,
  lastSelected,
  noSelect,
}) {
  const [selected, setSelected] = useState();

  function handleSelect(range) {
    setSelected(range);

    if (!range) {
      firstSelected(noSelect);
      lastSelected(noSelect);
      return;
    }

    if (range?.from) {
      firstSelected(range.from.getDate());
    }
    if (range?.to) {
      lastSelected(range.to.getDate());
    }
  }
  const myClasses = {
    selected:
      style.sharedSelected + " " + style.rangeStart + " " + style.rangeEnd,
    range_start: style.sharedSelected + " " + style.rangeStart,
    range_end: style.sharedSelected + " " + style.rangeEnd,
    range_middle: style.rangeMiddle,
  };

  return (
    <>
      <div
        className={`flex flex-col justify-between ${style["calendar-container"]}`}
      >
        <div id={style["calendar"]}>
          <DayPicker
            numberOfMonths={2}
            navLayout="around"
            startMonth={new Date()}
            endMonth={new Date(2025, 11)}
            animate
            mode="range"
            disabled={{ before: new Date() }}
            selected={selected}
            onSelect={handleSelect}
            modifiersClassNames={myClasses}
          />
        </div>
        <div className="flex" id={style["btn-container"]}>
          <button onClick={() => daysModifier(0)}>Date esatte</button>
          <button onClick={() => daysModifier(1)}>
            <Icons.PlusMinus /> 1 giorno
          </button>
          <button onClick={() => daysModifier(2)}>
            <Icons.PlusMinus /> 2 giorni
          </button>
          <button onClick={() => daysModifier(3)}>
            <Icons.PlusMinus /> 3 giorni
          </button>
          <button onClick={() => daysModifier(7)}>
            <Icons.PlusMinus /> 7 giorni
          </button>
          <button onClick={() => daysModifier(14)}>
            <Icons.PlusMinus /> 14 giorni
          </button>
        </div>
      </div>
    </>
  );
}
