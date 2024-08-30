import ContainerComponent from "./Components/ContainerComponent"

function App() {

  return (
    <>
       <div className="w-full h-screen bg-zinc-800 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-cyan-200">Calculator</h1>
         <ContainerComponent />
       </div>
    </>
  )
}

export default App
