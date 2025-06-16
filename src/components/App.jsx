import { useState } from "react";
import Modal from "./Modal";
import SwiperComponent from "./SwiperComponent";

// import FinestraCane from "./FinestraCane";

function App() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <button onClick={() => setOpenModal((prev) => !prev)}>CLICCAMI</button>
      <SwiperComponent />
      <Modal heart={openModal} onClose={() => setOpenModal(false)} />
      {/* <FinestraCane /> */}
    </>
  );
}

export default App;
