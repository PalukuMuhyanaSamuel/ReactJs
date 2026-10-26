import "./mycomposant.css";
// import Button from "../bouton/button";
export default function MyComposant({ item, text, handleClick }) {
  return (
    <>
      <h1>Hello {item}</h1>
      <p>{text}</p>
      <button onClick={handleClick}> cliquer ici</button>
    </>
  );
}
