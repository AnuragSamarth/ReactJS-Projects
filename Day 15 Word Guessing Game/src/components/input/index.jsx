import { useState } from "react";
import './style.css'

function Input({onInput=()=>{},value=''}={}){

  
    function handleInput(e){
      onInput(e.target.value);
    }

    return <input type="text" value={value} onInput={handleInput} />
}


export default Input;