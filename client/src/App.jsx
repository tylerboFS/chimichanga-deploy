import { useEffect, useState } from "react";

function App() {
  const [chimichangas, setChimichangas] = useState([]);

  useEffect(() => {
    const fetchChimis = async () => {
      const result = await fetch("/api/chimichangas");
      const chimis = await result.json();
      console.log(chimis);
      setChimichangas(chimis);
    };
    fetchChimis();
  }, []);

  return (
    <>
      <h1>Tyler's Chimichangas</h1>
      {chimichangas.map((c) => {
        return <p key={c.id}>{c.name}</p>;
      })}
    </>
  );
}

export default App;
