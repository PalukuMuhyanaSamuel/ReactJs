import "./todoApp.scss";
import { useState } from "react";
import Items from "./items";

export default function List() {
  const [itemTodo, setItemTodo] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setItemTodo(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (itemTodo.trim() === "") return; // Évite d'ajouter des tâches vides
    const newTodo = {
      id: crypto.randomUUID(),
      title: itemTodo,
      completed: false, // Correction orthographique (competed -> completed)
    };
    setList([...list, newTodo]);
    setItemTodo("");
  }

  function handleUpdate(id, value) {
    const temp = [...list];
    const item = temp.find((item) => item.id === id);
    if (item) {
      item.title = value;
      setList(temp);
    }
  }

  function handleDelete(id) {
    const temp = list.filter((item) => item.id !== id);
    setList(temp);
  }

  return (
    <>
      <div className="todoContainer">
        <form onSubmit={handleSubmit}>
          {/* Ajout de value={itemTodo} pour vider l'input après la soumission */}
          <input type="text" onChange={handleChange} value={itemTodo} />
          <button type="submit">Creer une tache</button>
        </form>
        <div className="todoContainer">
          <ul className="listTodo">
            {/* Utilisation de parenthèses au lieu d'accolades pour le map */}
            {list.map((item) => (
              <Items
                key={item.id}
                item={item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
