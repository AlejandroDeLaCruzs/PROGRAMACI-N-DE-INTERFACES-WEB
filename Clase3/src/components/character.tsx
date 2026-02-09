interface OriginOrLocation {
  name: string;
  url: string;
}

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginOrLocation;
  location: OriginOrLocation;
  image: string;
  episode: string[]; // URLs de episodios
  url: string;
  created: string;
};

interface CharacterProps {
  character: CharacterType | undefined;
}

export const Character = ({ character }: CharacterProps) => {

  return (
    <div>
      <h3>{character?.name}</h3>
      <p>{character?.gender}</p>
      <p>{character?.status}</p>
    </div>
  );
};
