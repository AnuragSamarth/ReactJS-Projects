import Button from "./components/button";
import Input from "./components/input";
import Tag from "./components/tag";
import Text from "./components/text";

function WordGuessingGame(){
    console.dir(Text)
    return <div className="bg-slate-700">
        <Input />
        <Button label="K" onClick={()=>{console.log('k passed')}}/>
        <Button label="=>" type={Button.Type.CIRCULAR} onClick={()=>{console.log('k passed')}}/>
        <Tag label={'score'}/>
        <Text text='Apple' type={Text.StyleType.ANSWER_HINT}/> <br />
        <Text text='My Question' type={Text.StyleType.QUESTION_TITLE}/> <br />
        <Text text='score' type={Text.StyleType.SCORE}/>
    </div>
}

export default WordGuessingGame;