import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

// 1. FormEdit extrait à l'extérieur
function FormEdit({ item, onUpdate, setIsEdit }) {
  const [newValue, setNewValue] = useState(item.title);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(item.id, newValue);
    setIsEdit(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setNewValue(e.target.value)}
        value={newValue}
      />
      <button type="submit">Modifier</button>
    </form>
  );
}

function TodoElement({ item, setIsEdit, onDelete }) {
  return (
    <>
      <div className="title">{item.title}</div>
      <div className="settings">
        <button onClick={() => setIsEdit(true)}>
          <CiEdit />
        </button>
        <button onClick={() => onDelete(item.id)}>
          <FaTrash />
        </button>
      </div>
    </>
  );
}

// 3. Composant principal "Items"
export default function Items({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="todo">
      <li className="cardTodo">
        {isEdit ? (
          <FormEdit item={item} onUpdate={onUpdate} setIsEdit={setIsEdit} />
        ) : (
          <TodoElement item={item} setIsEdit={setIsEdit} onDelete={onDelete} />
        )}
      </li>
    </div>
  );
}
