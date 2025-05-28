import { useState } from "react";
import Button from "./Button";
import { Size } from "../models/Size";
import { Color } from "../models/Color";
import { Icons } from "../models/Icons";
import { Modal } from "./Modal";
import { Header } from "./Header";

function App() {
  const [isGuestModalVisibile, setIsGuestModaleVisible] = useState(false);
  return (
    <>
      <Header />
      {/* <div>
        <Button
          size={Size.Lg}
          color={Color.Third}
          icon={Icons.RightArrow}
          bounce={true}
          onClick={setIsGuestModaleVisible}
        />
        {isGuestModalVisibile && <Modal />}
      </div>
      <Button size={Size.Sm} color={Color.Second} icon={Icons.Star} /> */}
    </>
  );
}

export default App;
