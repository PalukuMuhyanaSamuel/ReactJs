import { useState } from "react";
import MyComposant from "./components/MyComposant";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  const [input, setInput] = useState("");
  const [item, setItem] = useState({
    name: "sam",
    age: 31,
  });
  const [checked, setChecked] = useState(false);

  function inc() {
    setState(state + 1);
  }
  function dec() {
    setState(state - 1);
  }

  function handleChange(e) {
    const value = e.target.value;
    console.log(value);
    setInput(value);
  }

  function handleCheck() {
    setItem({ ...item, age: item.age + 1 });
  }

  const toggle = () => {
    setChecked(!checked);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(new FormData(e.target));
  }

  return (
    <>
      {state}
      <MyComposant state={state} />
      <br />
      <br />
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <br />
      <br />
      <input type="text" value={input} onInput={handleChange} />
      <br /> <br />
      {item.name}
      {item.age}
      <button onClick={handleCheck}>Ajouter 1 an</button>
      <br />
      <b></b>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue="Valeur par defaut" />
        <input type="checkbox" checked={checked} onChange={toggle} />
        <button disabled={!checked}>Envoyer</button>
      </form>
    </>
  );
}

export default App;
