import TrafficLight from "./components/TrafficLight"

function App() {

  const TrafficData = [
    {
      color: 'red',
      timeDuration: 4000,
      order: 3,
      displayOrder: 2
    },
    {
      color: 'green',
      timeDuration: 3000,
      order: 1,
      displayOrder: 1
    },
    {
      color: 'yellow',
      timeDuration: 5000,
      order: 2,
      displayOrder: 3
    }
  ]
    
  return (
    <>
    <div className=" w-full h-screen bg-slate-800">
      <TrafficLight data={TrafficData} />
    </div>
    </>
  )
}

export default App
