import './style.css'
import Input from '../input'
import Text from '../text'


function Hint(){
    return <div>
        <Input />
        <Text text="T" type={Text.StyleType.ANSWER_HINT} />
    </div>
}

export default Hint;