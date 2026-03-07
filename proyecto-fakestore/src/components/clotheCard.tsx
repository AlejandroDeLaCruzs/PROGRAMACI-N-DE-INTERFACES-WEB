import { Clothe } from "@/types";
import "../app/globals.css"

export const ClotheCard = ({ clothe }: { clothe: Clothe }) => {
  return (
    <div className="clothesDataCointer">
      <p>{clothe.title}</p>
      <img src={clothe.images.at(0)} />
    </div>
  );
};
