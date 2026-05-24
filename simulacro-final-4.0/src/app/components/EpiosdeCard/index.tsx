import Link from "next/link";
import "./style.css"

export const EpiosdeCard = ({ episode }: { episode: episode }) => {
  return (
    <Link href={`episodes/${episode.id}`} className="episdeCard">
      <div>
        <h1>{episode.name}</h1>
      </div>
    </Link>
  );
};
