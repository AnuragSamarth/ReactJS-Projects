import { useState } from "react"

function App() {
 
  const [toggle,setToggle] = useState(true);

  const hide = ()=>{
      setToggle(false)
      console.log(toggle)
  }

  const show = ()=>{
    setToggle(true)
    console.log(toggle)
  }

  return (
    <>
     <div className="w-full h-screen  bg-gray-600 flex align-middle justify-center">
      <div>

    {
      toggle ?  <div className=" w-60 h-60 bg-slate-300"></div> : null
    }


         {/* <div className=" w-60 h-60 bg-slate-300"></div> */}
         <div className=" m-5">
         <button className=" bg-gray-50 p-3 mr-3 border-black rounded-2xl" onClick={hide}>Hide</button>
         <button className=" bg-gray-50 p-3 mr-3 rounded-2xl" onClick={show}>Show</button>
         <button className=" bg-gray-50 p-3 rounded-2xl" onClick={()=>{
          setToggle(!toggle)
         }}>Toggle</button>
         </div>
         </div>
     </div>
    </>
  )
}

export default App
