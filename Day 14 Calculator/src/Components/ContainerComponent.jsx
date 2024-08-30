import { useState } from "react";
import ActionBtn from "./ActionBtn";
import InputField from "./InputField";

function ContainerComponent() {
  const [value, setValue] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  function handleClick(e) {
    const input = e.target.innerText;

    if (!isNaN(input) || input === ".") {
      // If input is a number or a dot, concatenate it to the current value
      setValue(value + input);
    } else if (input === "DEL") {
      // Handle delete functionality
      setValue(value.slice(0, -1));
    } else if (
      input === "+" ||
      input === "-" ||
      input === "*" ||
      input === "/"
    ) {
      // Handle operator input
      setOperator(input);
      setResult(value); // Save the first operand
      setValue(""); // Clear the current value for the next operand
    } else if (input === "=") {
      // Handle calculation
      if (result !== null && operator !== "") {
        const newResult = eval(`${result}${operator}${value}`);
        setValue(String(newResult));
        setOperator("");
        setResult(null);
      }
    } else if (input === "C") {
      // Handle clear functionality
      setValue("");
      setOperator("");
      setResult(null);
    }
  }

  return (
    <>
      <div className="w-[80%] h-[80%] md:w-[35%] border-2 p-5 border-white rounded-3xl flex flex-col items-center justify-between">
        <InputField
          className={
            "bg-transparent border-2 border-white text-white text-right p-3 rounded md w-full text-2xl"
          }
          type={Number}
          value={value}
        />
        <div className="w-full h-[85%] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={7}
              onClick={handleClick}
            />
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={8}
              onClick={handleClick}
            />
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={9}
              onClick={handleClick}
            />
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={"DEL"}
              onClick={handleClick}
            />
          </div>
          <div className="flex items-center justify-between mb-2">
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={4}
              onClick={handleClick}
            />
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={5}
              onClick={handleClick}
            />
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={6}
              onClick={handleClick}
            />
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={"/"}
              onClick={handleClick}
            />
          </div>
          <div className="flex items-center justify-between mb-2">
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={1}
              onClick={handleClick}
            />
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={2}
              onClick={handleClick}
            />
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={3}
              onClick={handleClick}
            />
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={"*"}
              onClick={handleClick}
            />
          </div>
          <div className="flex items-center justify-between mb-2">
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={"."}
              onClick={handleClick}
            />
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={0}
              onClick={handleClick}
            />
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={"="}
              onClick={handleClick}
            />
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={"-"}
              onClick={handleClick}
            />
            <ActionBtn
              className={
                "bg-slate-400 md:p-5 p-4 rounded-md font-sans text-3xl"
              }
              lable={"+"}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContainerComponent;
