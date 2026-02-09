

export const Character = ({character}) => {
  /*const [name, setName] = useState<string>("");
  const [species, setSpecies] = useState<string>("");*/
  //console.log(character);

  return (
    <div>
      <h3>{character.name}</h3>
      <p>{character.species}</p>
      <p>{character.status}</p>
    </div>
  );
};
