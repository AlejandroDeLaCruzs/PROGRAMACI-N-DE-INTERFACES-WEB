import { Character } from "@/types";
import "./index.css";
import Link from "next/link";

export const CharacterData = ({ character }: { character: Character }) => {
  return (
    <Link href={`/character/${character.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="CharacterCointener">
        <img src={character.image} alt={character.name} />
        <div className="dataCointer">
          <p><strong>Name:</strong> {character.name}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Status:</strong> {character.status}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterData;