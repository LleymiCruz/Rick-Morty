export default function Characters(props) {
  const { characters, setCharacters} = props;
  const resetCharacteres= ()=>{
    setCharacters(null)
  }
  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacteres}>Volver a home</span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <spam className="alive" />
                    Alive
                  </>
                ) : (
                  <>
                    <spam className="dead" />
                    Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios: </span>
                <span>{character.episode.length}</span>
                <p>
                <span className="text-grey">Especie: </span>
                <span>{character.species}</span>
              </p>
              </p>
            </div>
          </div>
        ))}
        ;
      </div>
      <span className="back-home" onClick={resetCharacteres}>Volver a home</span>
    </div>
  );
}
