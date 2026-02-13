import type { CharacterType } from "../types/character";
import "./style.css";

export type CharacterProps = {
  character: CharacterType;
};

export const Character = ({ character }: CharacterProps) => {
  return (
    <div className="characterContainer">
      <img
        src={character.image ?? "/placeholder.png"}
        alt={character.name}
        className="characterImage"
      />
      <div className="characterDataContainer">
        <p><strong>Name:</strong> {character.name}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Status:</strong> {character.status}</p>
      </div>
    </div>
  );
};