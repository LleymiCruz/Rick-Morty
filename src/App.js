import logo from "./logo.svg";
import imagenRickMorty from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);
  const respuestaApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterapi = await api.json();
    setCharacters(characterapi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            
            <img
              src={imagenRickMorty}
              alt="Rick & Morty"
              className="img-home"
            />
            <button onClick={respuestaApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )};
      </header>
    </div>
  );
}

export default App;
