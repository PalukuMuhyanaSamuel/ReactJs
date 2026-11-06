import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [utilisateur, setUtilisateur] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUtilisateur(data))
      .catch((error) => console.error("Erreur lors de la recuperation"));
    return () => {};
  }, []);
  return (
    <>
      <div>
        <h2>Liste des utilisateurs</h2>
        <ul>
          {utilisateur.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
