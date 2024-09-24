import { useEffect, useState } from "react";
import TextField from "./components/TextField/TextField";
import { data } from "./data.js";
import ShowData from "./components/ShowData/ShowData.jsx";

console.log(data);

function App() {
  const [inputText, setInputText] = useState("");
  const [isInput, setIsInput] = useState(false);
  const [filterData, setFilterData] = useState("");
  const [selectedData, setSelectedData] = useState("");
  const [isSelectedData, setIsSelectedData] = useState(false)
  
    useEffect(()=>{
      const dataFilter = [...data].filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()));
      setFilterData(dataFilter)
    }, [inputText])
  
    // console.log(filterData)

  function handleChange(e) {
    let value = e.target.value;
    setInputText(value);
    setIsInput(true);
  }

  function handleClick(){
     return function(e){
      setSelectedData(e.target.innerHTML);
       isSelectedData(true)
     }
  }

  // console.log(inputText);

  return (
    <>
      <div>
        <TextField
          onChange={handleChange}
          value={inputText || selectedData}
          placeholder={"Search Plz..."}
          className={` border-2 border-black p-2 rounded-lg`}
        />
        <div>
          <ul>
          {
            isInput &&  <ShowData data={filterData} onClick={handleClick} />
          }
          </ul>
        </div>
      </div>
      <div>
        <p>Selected: {selectedData}</p>
      </div>
    </>
  );
}

export default App;
