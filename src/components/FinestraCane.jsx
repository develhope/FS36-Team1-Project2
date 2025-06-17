import cane from "../assets/Images/cane.jpg";
import "../css/finestracane.css";

function FinestraCane() {
  return (
    <>
      <div id="finestra-cane">
        <div id="img-testo">
          <div id="immagine-cane">
            <img src={cane} alt="img_cane" />
          </div>
          <h2 id="animali-titolo">Animali di servizio</h2>
          <p id="p-animali">
            Non consideriamo gli animali di servizio come domestici, quindi non
            c'è bisogno di aggiungerli qui.
          </p>
          <p id="p-animali2">
            Viaggi con un animale d'assistenza emotiva? Consulta la nostra <a href=""><u>politica sull'accessibilità</u></a>.
          </p>
        </div>
      </div>
    </>
  );
}

export default FinestraCane;
