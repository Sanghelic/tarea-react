import { useRef, useState } from "react";
import ListItem from "./ListItem";

export default function ListSection() {
  const nextId = useRef(1);

  const [items, setItems] = useState([
    { id: nextId.current++, text: "Elemento 1", likes: 0 },
    { id: nextId.current++, text: "Elemento 2", likes: 0 },
  ]);

  console.log("Render: ListSection");

  function addItem() {
    const id = nextId.current++;
    setItems((prev) => [
      ...prev,
      { id, text: `Elemento ${id}`, likes: 0 },
    ]);
  }

  function deleteItem(id) {
    setItems((prev) => prev.filter((x) => x.id !== id));
  }

  function reverseList() {
    setItems((prev) => [...prev].reverse());
  }

  function likeItem(id) {
    setItems((prev) =>
      prev.map((x) => (x.id === id ? { ...x, likes: x.likes + 1 } : x))
    );
  }

  return (
    <section>
      <h2>2) Lista dinámica</h2>

      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <button onClick={addItem}>Agregar</button>
        <button onClick={reverseList}>Revertir orden</button>
      </div>

      <ul style={{ paddingLeft: 18 }}>
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onLike={likeItem}
            onDelete={deleteItem}
          />
        ))}
      </ul>
    </section>
  );
}