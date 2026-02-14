import { useNavigate } from "react-router-dom";
import type { CharacterType } from "../types/character";
import "./style.css";

export type CharacterProps = {
  character: CharacterType;
};

export const Character = ({ character }: CharacterProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="characterContainer"
      onClick={() =>
        navigate(`/character/${character.id}`, { state: character })
      }
    >
      <img
        src={character.image ?? "/placeholder.png"}
        alt={character.name}
        className="characterImage"
      />
      <div className="characterDataContainer">
        <p>
          <strong>Name:</strong> {character.name}
        </p>
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
        <p>
          <strong>Status:</strong> {character.status}
        </p>
      </div>
    </div>
  );
};
