import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const item1 = {
    name: "Max Verstappen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tmi66yM9XIyQu-sEpwErBUa4-zWT3ZzfkhkGhNtTaw&s",
    tags: ["Status: Vivo", "Profissão: Piloto", "Categoria: F1"],
  };

  const item2 = {
    name: "Fernando Alonso",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCeaZ_7dkgT2s5dwGh8ZYsJh24Nt3wOxRMRg&s",
    tags: ["Status: Vivo", "Profissão: Piloto", "Categoria: F1"],
  };

  const item3 = {
    name: "Carlos Sainz Jr",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEAecYERovDCcKTVUvHGkqs1d55LPx1m-JA&s",
    tags: ["Status: Vivo", "Profissão: Piloto", "Categoria: F1"],
  };

  const items = [item1, item2, item3];

  return (
    <>
      <div className="cards">
        {items.map(function (elemento) {
          return <Card item={elemento} />;
        })}
      </div>
    </>
  );
}

export default App;
