import './style.css';
import Tag from '../tag'
import Text from '../text';

function ScoreBoard(){
    return <div>
        <Tag label="score" />
        <Text text="1" Type={Text.StyleType.SCORE}/>
    </div>
}

export default ScoreBoard;