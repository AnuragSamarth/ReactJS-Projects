import { useState } from "react"


function App() {
  const [count,setCount] = useState(0)

  const Increment = ()=>{
    setCount(count + 1)
  }

  const Decrement = ()=>{
    if(count>0){
      setCount(count - 1)
    }else{
      setCount(0)
    }
  }

  return (
    <>
    <h1 className="text-3xl font-bold underline text-cyan-600">
      Hello world!
    </h1>
     <div>
      <h1>{count}</h1>
     </div>
     <button onClick={Increment}>Increment</button> <br /><br />
     <button onClick={Decrement} >Decrement</button>
    </>
  )
}

export default App
