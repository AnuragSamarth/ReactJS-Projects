import { Link } from "react-router-dom";
import Dice from "../assets/Dice.png"
import Button from "../components/Button/Button";

function  Home(){
    return (
        <>
          <div className=" w-full h-screen flex items-center justify-around">
              <div className="">
                  <img src={Dice} alt="Dice img" />
              </div>
              <div className="">
                  <h1 className=" text-8xl font-sans">DICE Game</h1>
                  <Link to='/game'><Button lable={'Play Now'} className={' border-2 pl-10 pr-10 mt-5 p-2 rounded-lg bg-black text-white '}/></Link>
              </div>
          </div>
        </>
    )
}

export default Home;