import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import SwiperComponent from "./SwiperComponent.jsx";

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          padding: "0 50px",
          overflow: "hidden",
        }}
      >
        <SwiperComponent />
      </div>
      <Footer />
    </>
  );
}

export default App;
