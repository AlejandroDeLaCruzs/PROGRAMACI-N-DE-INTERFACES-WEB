import "./style.css";

export const LocationCard = ({ location }: { location: location }) => {
  return (
    <div className="locationContenier">
      <h1>{location.name}</h1>
      <h3>{location.dimension}</h3>
    </div>
  );
};
