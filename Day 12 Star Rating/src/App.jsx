import { useState } from "react"
import Starrating from "./components/Starrating"

function App() {

  const [stars, setStars] = useState(5);


  return (
    <>
      <div className="w-full h-screen bg-slate-700 flex items-center justify-center">
        <div className="flex flex-col">
          <Starrating star={stars} />
        </div>
      </div>   
    </>
  )
}

export default App
