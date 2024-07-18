import { useState } from "react";

function App() {

  const [color, setColor] = useState(null)

  function generateRandomNum(){
      return  Math.floor(Math.random() * 256);
  }

  function handleClick(){
    const color = `rgb(${generateRandomNum()},${generateRandomNum()},${generateRandomNum()})`
    setColor(color);
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center relative" style={{backgroundColor: color}}>
          <div className="w-full h-16 bg-zinc-700 flex items-center justify-center">
              <button className="p-3 bg-sky-400 rounded-lg" onClick={handleClick}>Generate Random Color</button>
          </div>
          <div className=" absolute top-80">
            <h1 className="text-3xl">{color}</h1>
          </div>
      </div>
    </>
  )
}

export default App
