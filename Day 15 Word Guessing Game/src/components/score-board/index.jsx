import './style.css';
import Tag from '../tag'
import Text from '../text';

function ScoreBoard({score = 0}){
    return <div>
        <Tag label="score" />
        <Text text="1" Type={Text.StyleType.SCORE} text={score}/>
    </div>
}

export default ScoreBoard;