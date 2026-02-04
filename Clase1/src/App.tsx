import "./App.css";
import { Counter } from "./components/count";
import Saludo from "./components/hello";

const MiFuncion = () => {
  //const [count, setCount] = useState<number>(0);

  return (
    <div className="miPrimerStyle">
      <h1>esto es una prueba</h1>
      <Saludo name="alex" />
      <Counter name="alex"/>
    </div>
  );
};

export default MiFuncion;

