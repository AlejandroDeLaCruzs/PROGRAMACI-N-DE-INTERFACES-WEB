import { useState } from "react";

export const Botones = () => {
  const [num1, setNum1] = useState<number>(-1);
  const [num2, setNum2] = useState<number>(-1);
  const [texto_operacion, setTextoOperacion] = useState<number>(-1);
  const [operacion, setOperacion] = useState<string>("0");

  const handleCalculatorInput = (data: number | string) => {
    if (typeof data == "number") {
      if (num1 == -1) {
        setNum1(data);
        console.log(data);
        return;
      }
      if (num2 == -1) {
        setNum2(data);
        console.log(data);
        return;
      }
    } else {
      setOperacion(data);
      console.log(data);
      return;
    }
  };

  const solution = () => {};

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
                    setTextoOperacion(1);
                  }}
                >
                  1
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput(2);
                    setTextoOperacion(2);
                  }}
                >
                  2
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput(3);
                    setTextoOperacion(3);
                  }}
                >
                  3
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    handleCalculatorInput(4);
                    setTextoOperacion(4);
                  }}
                >
                  4
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput(5);
                    setTextoOperacion(5);
                  }}
                >
                  5
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput(6);
                    setTextoOperacion(6);
                  }}
                >
                  6
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    handleCalculatorInput(7);
                    setTextoOperacion(7);
                  }}
                >
                  7
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput(8);
                    setTextoOperacion(8);
                  }}
                >
                  8
                </button>
                <button
                  onClick={() => {
                    handleCalculatorInput(9);
                    setTextoOperacion(9);
                  }}
                >
                  9
                </button>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                handleCalculatorInput(0);
              }}
            >
              0
            </button>
           
          </div>
        </div>
        <div className="operaciones">
          <button
            onClick={() => {
              handleCalculatorInput("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleCalculatorInput("-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              handleCalculatorInput("/");
            }}
          >
            /
          </button>
          <button
            onClick={() => {
              handleCalculatorInput("*");
            }}
          >
            *
          </button>
        </div>
      </div>
    </div>
  );
};
