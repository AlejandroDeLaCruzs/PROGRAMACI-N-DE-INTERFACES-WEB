type SaludoProp = {
  name: string;
};

const Saludo = ({ name }: SaludoProp) => {
  //return <p> Hola {name}</p>;
  return <span style={{ color: "red" }}>Hola {name}</span>;
};

export default Saludo;
