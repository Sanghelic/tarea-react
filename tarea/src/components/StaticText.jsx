import React from "react";

function StaticText({ text }) {
  console.log("Render: StaticText ->", text);
  return <p>{text}</p>;
}

export default React.memo(StaticText);