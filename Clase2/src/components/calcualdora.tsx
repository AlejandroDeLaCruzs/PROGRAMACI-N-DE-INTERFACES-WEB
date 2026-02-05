import { useState } from "react";

export const Botones = () => {
  const [inputNums, setinputNums] = useState<string>("");
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [texto_operacion, setTextoOperacion] = useState<number>(0);
  const [operacion, setOperacion] = useState<string>("0");

  const handleOperation = (operation: string) => {
    setNum1(parseInt(inputNums));
    setTextoOperacion(0);
    setOperacion(operation);
    setinputNums("");
  };

  const handleCalculatorInput = (data: number) => {
    const numero = inputNums + data;
    setinputNums(numero);
    setTextoOperacion(Number.parseInt(numero));
  };

  const solution = () => {
    const n2 = parseInt(inputNums);
    console.log("n1" + num1);
    console.log("n2" + n2);
    if (operacion === "+") {
      const resultado = num1 + n2;
      setTextoOperacion(resultado);
      return;
    }
    if (operacion === "-") {
      setTextoOperacion(num1 - n2);
    }
    if (operacion === "*") {
      setTextoOperacion(num1 * n2);
    } else {
      setTextoOperacion(num1 / n2);
    }
    setOperacion("0");
  };

  return (
    <div className="main">
      <div>
        <h1>{texto_operacion}</h1>
      </div>
      <div className="prueba">
        <div className="aux">
          <div className="botones">
            <div>
              <div>
                <button
                  onClick={() => {
                    handleCalculatorInput(1);
                  }}
                >
                  1
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput(2);
                  }}
                >
                  2
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput(3);
                  }}
                >
                  3
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    handleCalculatorInput(4);
                  }}
                >
                  4
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput(5);
                  }}
                >
                  5
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput(6);
                  }}
                >
                  6
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    handleCalculatorInput(7);
                  }}
                >
                  7
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput(8);
                  }}
                >
                  8
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput(9);
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
                handleCalculatorInput(0);
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
