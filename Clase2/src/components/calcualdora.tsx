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
                <button
                  onClick={() => {
                    handleCalculatorInput("1");
                  }}
                >
                  1
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput("2");
                  }}
                >
                  2
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput("3");
                  }}
                >
                  3
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    handleCalculatorInput("4");
                  }}
                >
                  4
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput("5");
                  }}
                >
                  5
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput("6");
                  }}
                >
                  6
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    handleCalculatorInput("7");
                  }}
                >
                  7
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput("8");
                  }}
                >
                  8
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput("9");
                  }}
                >
                  9
                </button>
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
          <button
            onClick={() => {
              handleOperation("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleOperation("-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              handleOperation("/");
            }}
          >
            /
          </button>
          <button
            onClick={() => {
              handleOperation("*");
            }}
          >
            *
          </button>
        </div>
      </div>
    </div>
  );
};
