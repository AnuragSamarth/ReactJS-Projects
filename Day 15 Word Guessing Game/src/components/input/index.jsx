import { useState } from "react";
import './style.css'

function Input({onInput=()=>{}}={}){

    const [value, setValue] = useState('');    
    

    function handleInput(e){
      onInput(e.target.value);
      setValue(e.target.value)
      console.log(value)
    }

    return <input type="text" value={value} onInput={handleInput}/>
}


export default Input;