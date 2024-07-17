import Boxcontainer from "./Components/Boxcontainer"

function App() {

  return (
    <>  
    <div className="w-[100%] h-screen relative overflow-hidden flex flex-col items-center justify-center">
         <div className="mb-5">
          <h1 className="text-4xl text-slate-500">Accordion Component</h1>
         </div>
         <Boxcontainer />
    </div>
    </>
  )
}

export default App
