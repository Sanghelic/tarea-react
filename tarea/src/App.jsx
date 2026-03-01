import CounterSection from "./components/CounterSection";
import ListSection from "./components/ListSection";

export default function App() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1>Optimización de renderizado (React)</h1>

      <CounterSection />

      <hr style={{ margin: "32px 0" }} />

      <ListSection />
    </div>
  );
}