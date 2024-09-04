import Button from "../components/Button/Button";
// import Dices from  "../assets/dices.png"
import { useState } from "react";
import dice1 from "../assets/Dices-img/dice_1.png";
import dice2 from "../assets/Dices-img/dice_2.png";
import dice3 from "../assets/Dices-img/dice_3.png";
import dice4 from "../assets/Dices-img/dice_4.png";
import dice5 from "../assets/Dices-img/dice_5.png";
import dice6 from "../assets/Dices-img/dice_6.png";


const CONST_ARR = [1,2,3,4,5,6];
// const CONST_IMG = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];

function Game() {

     const [selectedNum, setSelectedNum] = useState(null);
     const [currentDice, setCurrentDice] = useState(null);

     function handleSelectedNum(){
        return function (e){
            setSelectedNum(e.target.innerHTML)
        }
     }

    //  console.log(selectedNum)

     function generateRandomNumber(){
        return Math.floor(Math.random() * 6) + 1;
     }

     function roleDice(){
    const rendomNum =  generateRandomNumber();
     setCurrentDice(String(rendomNum))
     }

  
  return (
    <>
      <div className="w-full h-screen relative">
        <div className=" flex items-center justify-around pt-5">
          <div>
            <span className=" text-7xl">0</span>
            <h1 className=" text-3xl">Total Score</h1>
          </div>
          <div>
            {[...CONST_ARR].map((_, i) => (
              <span key={i}>
                <Button
                  lable={i + 1}
                  className={`border-2 pl-4 pr-4 p-2 text-black mr-5`}
                  onclick={handleSelectedNum(i)}
                />
              </span>
            ))}
            <p className="mt-3 text-2xl">Selected Number</p>
          </div>
        </div>
        <div className=" mt-24 flex items-center justify-center">
          <div className=" flex flex-col  items-center w-[15%] relative">
            <div className="w-52 overflow-hidden rounded-2xl bg-slate-500">
              {
              <img src={`dice${currentDice}`} alt="dice-img" onClick={roleDice} />
              }
            </div>
            <p>Click on Dice to Roll</p>
            <Button
              lable={"Reset Score"}
              className={
                " border-2 pl-10 pr-10 mt-5 p-2 rounded-lg border-black text-black "
              }
            />
            <Button
              lable={"Show Rules"}
              className={
                " border-2 pl-10 pr-10 mt-5 p-2 rounded-lg bg-black text-white "
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
