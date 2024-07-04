import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Text from "./components/Text";
import Buttons from "./components/Buttons"


function App() {
  const [randomNum, useRandomNum] = useState("");

  useEffect(()=>{
    function generateRandomNumber() {
      let numberRandom = Math.floor(Math.random() * 100);
      useRandomNum(numberRandom);
    }
    generateRandomNumber();
  },[])

  // console.log(randomNum);

  return (
    <>
      <Header />
      <Text />
      <Form  randomNum={randomNum} useRandomNum={useRandomNum}/>
      <Buttons useRandomNum={useRandomNum}/>
    </>
  );
}

export default App;
