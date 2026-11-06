import { useState } from "react";
import "./App.css";

function Carte(props) {
  const [estVisible, setEstVisible] = useState(true);
  const [valeur, setValeur] = useState("");
  function valeurChange(event) {
    setValeur(event.target.value);
  }
  return (
    <>
      <h1>
        {props.nom} est {props.metier}
      </h1>
      <button onClick={() => setEstVisible(!estVisible)}>
        {estVisible ? "Masquer" : "Afficher"}
      </button>
      <div style={{ paddingTop: "2px" }}>
        {estVisible && (
          <input
            type="text"
            onChange={valeurChange}
            value={valeur}
            placeholder="Tapez quelque chose ..."
          />
        )}
        {estVisible && <p>La valeur saisie est : {valeur}</p>}
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Carte nom={"Sam"} metier={"Pompier"} />
    </>
  );
}

export default App;
