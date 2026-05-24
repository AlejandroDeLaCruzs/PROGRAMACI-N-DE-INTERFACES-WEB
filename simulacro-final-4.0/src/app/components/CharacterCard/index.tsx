
import "./style.css"

export const CharacterCard = ({character} : {character: character}) => {

    return (
        <div className="characterConteiner">
            <img src={character.image}/>
            <div className="characterData">
                <h1>{character.name}</h1>
                <h2>{character.location.name}</h2>
                <p>{character.status}</p>
            </div>
        </div>
    )

}