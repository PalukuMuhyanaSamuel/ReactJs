import MyComposant from "./components/Composant1/MyComposant";
import "./App.css";

function App() {
  const name = "sam";
  function handleClick() {
    console.log("Hello depuis fonction");
  }
  return (
    <>
    {/* les components et props  */}
      <MyComposant
        item={name}
        text="hello depuis props"
        handleClick={handleClick}
      ></MyComposant>


      
    </>
  );
}

export default App;
