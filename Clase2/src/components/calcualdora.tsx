import { useState } from "react";

export const Botones = () => {
  const [num1, setNum1] = useState<number>(0);
  const [display, setDisplay] = useState<string>("0");
  const [operacion, setOperacion] = useState<string>("");
  const [texto_completo, setTexto_Completo] = useState<string>("");

  const handleOperation = (operation: string) => {
    setNum1(Number.parseInt(display));
    setTexto_Completo((prev) => prev + operation);
    setDisplay("");
    setOperacion(operation);
  };

  const handleCalculatorInput = (data: string) => {
    const numero = texto_completo + data;
    setDisplay((prev) => prev + data);
    setTexto_Completo(numero);
  };

  const solution = () => {
    const n2 = Number.parseInt(display || "0");
    var resulatdo = 0;
    console.log("n1:" + num1);
    console.log("n2:" + n2);
    if (operacion === "+") {
      resulatdo = num1 + n2;
    } else if (operacion === "-") {
      resulatdo = num1 - n2;
    } else if (operacion === "*") {
      resulatdo = num1 * n2;
    } else if (operacion === "/") {
      resulatdo = num1 / n2;
    }

    setOperacion("0");
    setTexto_Completo(resulatdo.toString());
    console.log("resultado:" + resulatdo);
    setDisplay(resulatdo.toString());
  };

  return (
    <div>
      <div className="display">
        <h1>{texto_completo}</h1>
      </div>
      <div className="prueba">
        <div className="aux">
          <div className="botones">
            <div>
              <div>
                <div>
                  {[1, 2, 3].map((n) => (
                    <button
                      key={n}
                      onClick={() => handleCalculatorInput(n.toString())}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                {[4, 5, 6].map((n) => (
                  <button
                    key={n}
                    onClick={() => handleCalculatorInput(n.toString())}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <div>
                {[7, 8, 9].map((n) => (
                  <button
                    key={n}
                    onClick={() => handleCalculatorInput(n.toString())}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="numerosraros">
            <button
              onClick={() => {
                handleCalculatorInput("0");
              }}
            >
              0
            </button>
            <button
              onClick={() => {
                solution();
              }}
            >
              =
            </button>
          </div>
        </div>
        <div className="operaciones">
          {["+", "-", "*", "/"].map((n) => (
            <button key={n} onClick={() => handleOperation(n)}>
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
