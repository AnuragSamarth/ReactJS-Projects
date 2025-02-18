// import { useState } from 'react'
import { useState } from "react";
import "./App.css";

const config = [
  [1, 1, 0],
  [1, 0, 1],
  [1, 1, 1],
];

function App() {
  const [clickOrder, setClickOrder] = useState([]);
  // const [reverseClickOrder, setReverseClickOrder] = useState([])

  const configLength = config.flat(1).filter((val) => val === 1).length;
  // console.log(conunt)

  function handleClick(value ,index){
    return () => {
      if(value === 0){
        return;
      }
      if(clickOrder.includes(index)){
        alert("you already clicked!!")
        return;
      }
      
      const newClickOrder = [...clickOrder, index];
      setClickOrder(newClickOrder);
      
      if (newClickOrder.length === configLength) {
        console.log("All cells clicked!");
        startDeactivatedCells(newClickOrder);
      }
    }
  }

  // console.log(clickOrder.length)

  function startDeactivatedCells(order) {
    const newClickOrder = structuredClone(order);
    console.log("Deactivating cells in order:", newClickOrder);
    
    // Start deactivation process
    const deactivationInterval = setInterval(() => {
      setClickOrder(prev => {
        const newOrder = [...prev];
        newOrder.pop(); // Remove last clicked cell
        
        if (newOrder.length === 0) {
          clearInterval(deactivationInterval);
        }
        
        return newOrder;
      });
    }, 1000); 
  }



  return (
    <div className="wrapper">
      <div className='box'>
        {config.flat(1).map((value, index) => {
          const isOff = value === 0;
          const filled = clickOrder.includes(index)
          return (
            <div onClick={handleClick(value ,index)} key={index} className={`cell ${isOff && "off"} ${filled && "on"}`}></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
