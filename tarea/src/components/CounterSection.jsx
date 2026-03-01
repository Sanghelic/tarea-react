import { useState } from "react";
import StaticText from "./StaticText";

export default function CounterSection() {
  const [count, setCount] = useState(0);

  console.log("Render: CounterSection");

  return (
    <section>
      <h2>1) Contador + textos independientes</h2>

      <button onClick={() => setCount((c) => c + 1)}>
        Incrementar contador
      </button>

      <p>Contador: {count}</p>

      <StaticText text="Texto A" />
      <StaticText text="Texto B" />
      <StaticText text="Texto C" />
    </section>
  );
}