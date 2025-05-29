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
            <Icons.AirBnbLogo className="logo" size={logoSize} />
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
                <Icons.AirBalloon className="logo" size={logoSize} />
                <span className="header-text-size">Eserienze</span>
              </a>
              {/* <div className={`${style["active-page"]}`}></div> */}
            </div>
            <div className={`${style["icon-height-adjust"]}`}>
              <a className="flex justify-center align-center" href="#">
                <Icons.Bell className="logo" size={logoSize} />
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
                size={Size.Md}
                color={Color.First}
                icon={<Icons.Globe />}
                bounce={true}
                onClick={setIsLanguageModalVisible}
              />
              {isLanguageModalVisibile && (
                <Modal languageVisible={isLanguageModalVisibile} />
              )}
            </div>
            <div
              className="flex alig"
              style={{
                position: "relative",
              }}
            >
              <Button
                size={Size.Md}
                color={Color.First}
                icon={<Icons.Hamburger />}
                bounce={true}
                onClick={setIsGuestModalVisible}
              />
              {isGuestModalVisibile && (
                <Modal guestVisible={isGuestModalVisibile} />
              )}
            </div>
          </div>
        </div>
        {/* <div style={{ width: "300px" }}></div> */}
      </header>
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem sit
        asperiores nemo, soluta veritatis ullam possimus, officia iste ratione
        aliquid suscipit, labore repellat quisquam? Tempora maiores doloribus
        quis assumenda architecto.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        debitis harum sed non dolore iste aut quo doloremque quam quas?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        dicta iusto eaque atque quam inventore excepturi doloribus? Sit impedit
        itaque harum obcaecati corporis a fugiat doloribus ex dolor molestiae
        nostrum blanditiis officia atque quam eius provident inventore mollitia,
        voluptas ullam rem exercitationem? Et optio numquam repellendus aperiam!
        Placeat architecto veritatis deleniti, enim perspiciatis blanditiis
        excepturi nulla harum pariatur debitis quidem.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum rem vero
        voluptatibus iusto quasi nesciunt ipsam aliquid quibusdam quisquam
        laborum. Nam itaque fuga, quod quisquam eligendi dignissimos magni sed
        nihil ducimus, adipisci explicabo dolores saepe iusto quibusdam tempora
        molestias voluptate esse minima iste earum quidem reiciendis nisi quis
        amet? Veritatis accusantium reprehenderit facere natus, excepturi quae
        praesentium. Amet nihil cum nesciunt nostrum architecto, nulla
        voluptates at officia, ipsa modi ratione libero! Blanditiis nemo sequi
        tempore, magnam accusamus possimus eaque, voluptate impedit ullam quis
        quas inventore in voluptatem ipsam! Tenetur modi sint distinctio!
        Officiis repudiandae excepturi totam enim aliquam accusantium iure culpa
        ad magni saepe cumque sapiente molestiae corrupti consequuntur incidunt
        qui quae perferendis, tempora architecto facere aperiam! Esse aspernatur
        quasi iure quos eos fugiat officiis illo non quibusdam, ratione sint?
        Accusantium quis optio voluptate ullam. Sed iste quae a debitis
        excepturi aliquam quaerat quas explicabo iure eos. Quaerat in dolorum,
        provident minus, odit aut commodi qui impedit necessitatibus nihil
        rerum? Maiores eveniet perspiciatis, reiciendis sequi doloribus, ullam
        quam dolorum magni tempore consequatur ad excepturi autem eius iusto
        aperiam nam aspernatur vero dicta, esse cum commodi? Aliquam accusamus
        distinctio est minus similique quisquam praesentium alias. Deleniti,
        neque. Architecto dignissimos totam esse.
      </h1>
    </>
  );
}
