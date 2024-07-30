import InputField from "./InputField";
import ActionBtn from "./ActionBtn";
import { useState } from "react";

const numButtons = new Array(10);
const Add = "+";
const Sub = "-";
const Multi = "*";
const Divide = "/";
const Delete = "DEL";
const Equal = "=";
const operationBtn = [Add, Sub, Multi, Divide, Equal, Delete];

function Wrapper() {
  const [operandA, setOperandA] = useState("");
  const [operandB, setOperandB] = useState("");
  const [operation, setOperation] = useState("");
  const [currentNum, setCurrenetNum] = useState("");

  function onInput(value) {
    // console.log(value);
    console.log(operandA);
    // setValues(value);
    if (operandA) {
      if (!operandB) {
        const lastChar = value.split("").at(-1);
        console.log(lastChar);
        setOperandB(Number(lastChar));
        setCurrenetNum(lastChar);
      } else {
        setCurrenetNum(value);
        setOperandB(Number(value));
      }
    } else {
      setCurrenetNum(value);
    }
  }

  function handleClick(number) {
    return () => {
      const newValue = `${currentNum}${number}`;
      if (operandA) {
        if (!operandB) {
          setOperandB(Number(number));
          setCurrenetNum(number);
        } else {
          setCurrenetNum(newValue);
          setOperandB(Number(newValue));
        }
      } else {
        setCurrenetNum(newValue);
      }
    };
  }

  function handleOperationSelect(type) {
    // const oneWay = e.target.dataset.operation;
    // const secontWay = e.target.getAttribute('data-operation')
    //  console.log(oneWay, secontWay)
    return () => {
      setOperation(type);
      if (type === Equal) {
        console.log(true);
        let result = 0;
        switch (true) {
          case operation === Add:
            result = operandA + operandB;
            console.log(result);
            setCurrenetNum(result);
            break;
          case operation === Sub:
            result = operandA - operandB;
            setCurrenetNum(result);
            break;
          case operation === Multi:
            result = operandA * operandB;
            setCurrenetNum(result);
            break;
          case operation === Divide:
            result = operandA / operandB;
            setCurrenetNum(result);
            break;
          case operation === Delete:
            console.log("Delete");
          default:
            alert("Plz Enter the number");
        }
      } else {
        setOperandA(Number(currentNum));
      }
    };
  }

  return (
    <>
      <div className="w-[80%] h-[80%] md:w-[35%] border-2 p-5 border-white rounded-3xl flex flex-col items-center justify-between">
        <InputField
          className={
            "bg-transparent border-2 border-white text-white text-right p-3 rounded md w-full text-2xl"
          }
          onInput={onInput}
          value={currentNum}
        />
        <h1>Selection Operation {operation}</h1>
        <div className="w-full h-[85%] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2 flex-wrap">
            {[...numButtons].map((_, i) => {
              return (
                <ActionBtn
                  key={i}
                  className={
                    "bg-slate-400 md:p-5 mb-5 p-4 rounded-md font-sans text-3xl ml-5"
                  }
                  lable={i}
                  onClick={handleClick(i)}
                />
              );
            })}
            {operationBtn.map((elem, i) => {
              return (
                <ActionBtn
                  key={elem}
                  className={
                    "bg-slate-400 md:p-5 mb-5 p-4 rounded-md font-sans text-3xl ml-5"
                  }
                  lable={elem}
                  dataOperation={elem}
                  onClick={handleOperationSelect(elem)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wrapper;
