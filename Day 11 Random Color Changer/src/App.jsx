import { useState } from "react";

function App() {
  const [color, setColor] = useState(null);
  const [hexaColor, setHexaColor] = useState(null);
  const [btnToggle, setBtnToggle] = useState(false);

  function generateRandomNum() {
    return Math.floor(Math.random() * 256);
  }

  function handleClick() {
    const color = `rgb(${generateRandomNum()},${generateRandomNum()},${generateRandomNum()})`;
    setColor(color);
  }

  function handleHexaClick() {
    const colorStr = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const colorArr = colorStr.split("");
      color += colorArr[Math.floor(Math.random() * 16)];
    }
    setHexaColor(color);
  }

  function handleToggle() {
    setBtnToggle((prevToggle) => !prevToggle);
  }

  return (
    <>
      <div
        className="w-full h-screen flex flex-col items-center relative"
        style={{ backgroundColor: color }}
      >
        <div
          className="w-full h-16 flex items-center justify-center gap-4"
          style={{ backgroundColor: hexaColor }}
        >
          <button
            className="p-3 bg-sky-400 rounded-lg"
            onClick={btnToggle && handleClick}
          >
            Generate RGB Random Color
          </button>
          <button
            className="p-3 bg-green-400 rounded-lg"
            onClick={btnToggle !== true ? handleHexaClick : null}
          >
            Generate Hexa Random Color
          </button>
          <button className="p-3 bg-zinc-400 rounded-lg" onClick={handleToggle}>
            Toggle Button to{" "}
            {btnToggle === true
              ? "Generate Hexa Random Color"
              : "Generate RGB Random Color"}
          </button>
        </div>
        <div className=" absolute top-80">
          <h1 className="text-3xl">{color}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
