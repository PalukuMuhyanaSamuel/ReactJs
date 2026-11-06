import { useState } from "react";

export default function MyComposant({ onStatusChange, ...props }) {
  const [internalState, setInternalState] = useState("State du child");
  const handleChange = () => {
    const newState = "Nouvelle etat du childState";
    onStatusChange(newState);
    setInternalState(newState);
  };
  return (
    <>
      <p>{props.propsParent}</p>
      <p>Etat du composant enfant: {internalState}</p>
      <button onClick={handleChange}>Changer l'etat</button>
    </>
  );
}
