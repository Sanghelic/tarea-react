import React from "react";

function ListItem({ item, onLike, onDelete }) {
  console.log("Render: ListItem ->", item.id);

  return (
    <li style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8 }}>
      <span style={{ flex: 1 }}>{item.text}</span>

      <button onClick={() => onLike(item.id)}>Me gusta ({item.likes})</button>
      <button onClick={() => onDelete(item.id)}>Eliminar</button>
    </li>
  );
}

export default React.memo(ListItem);