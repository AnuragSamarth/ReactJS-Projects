import { useRef } from "react";
import { useState } from "react"

const TempArray = ['•',"•","•","•"];

export default function OTP({count = 4}) {
    const [otps, setOtps] = useState([]);
    const [masking, setMasking] = useState([]);
    const inputRefs = useRef([])

    function handleClick(index){
        return (event)=> {
            event.target.setSelectionRange(1,1)
        }
    }

    function handleKeyUp(index){
       return (event)=>{
        const key = event.key;
        // console.log(key)
        const oldOtps = [...otps]
        const oldMasking = [...masking]

        if(key === 'Backspace'){
            oldOtps[index] = "";
            oldMasking[index] = "";
            setOtps(oldOtps)
            setMasking(oldMasking)
            handleBackSpace(index);
            return
        }

        if(key === 'ArrowRight'){
            // console.log("arrow right")
          handleArrowRight(index);
          return
        }

        if(key === 'ArrowLeft'){
            handleArrowLeft(index);
            return
        }

         if(isNaN(key)){
            return
        }

        oldOtps[index] = key;
        oldMasking[index] = TempArray[index];

        setOtps(oldOtps);
        setMasking(oldMasking); 

        // Send the focus to next box if it available.
        if(inputRefs.current[index + 1]){
            inputRefs.current[index + 1]?.focus();
        }
       }
    }

    function handleBackSpace(index){
         if(inputRefs.current[index - 1]){
            inputRefs.current[index - 1]?.focus();
        }
    }

    function handleArrowRight(index){
        if(inputRefs.current[index + 1]){
            inputRefs.current[index + 1]?.focus();
        }
    }

    function handleArrowLeft(index){
        if(inputRefs.current[index - 1]){
            inputRefs.current[index - 1]?.focus();
        }
    }

    console.log(otps)

    return (
        <div className="w-full h-screen bg-slate-800 flex justify-center items-center">
           {
            new Array(count).fill("").map((__, index)=>(
                <input key={index} ref={(iRefs)=>{inputRefs.current[index] = iRefs}} type="text" className="bg-white rounded-md h-16 w-16 text-4xl mr-4 text-center" onKeyUp={handleKeyUp(index)} value={masking[index] ?? ""} onClick={handleClick(index)} inputMode="numeric" maxLength={1} /> 
            ))
           }
        </div>
    )
}