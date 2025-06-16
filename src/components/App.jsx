// import { useState } from "react";
// import Modal from "./Modal";
import SwiperComponent from "./SwiperComponent";

// import FinestraCane from "./FinestraCane";

function App() {
  // const [openModal, setOpenModal] = useState(null);

  return (
    <>
      {/* <button onClick={() => setOpenModal((prev) => !prev)}>CLICCAMI</button> */}
      <div style={{ padding: "0 50px", overflow: "hidden" }}>
        <SwiperComponent />
      </div>
      {/* <Modal heart={openModal} onClose={() => setOpenModal(false)} /> */}
      {/* <FinestraCane /> */}
    </>
  );
}

export default App;
