import Controller from "./components/controller";
import Hint from "./components/hint";
import Keyboard from "./components/keyboard";
import ScoreBoard from "./components/score-board";
import './index.css'
function WordGuessingGame(){
    console.dir(Text)
    return <div className="bg-slate-700">
        <div className="hint-score">
         <Hint />
         <ScoreBoard />
        </div>
         <Controller />
         <Keyboard />
    </div>
}

export default WordGuessingGame; 