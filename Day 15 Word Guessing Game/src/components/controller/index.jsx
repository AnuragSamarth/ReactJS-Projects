import './style.css'
import Button from '../button';
import Text from '../text';

function Controller(){
    return <div className='controller'>
       <Button label='Prev' />
       <Text text='Question' type={Text.StyleType.QUESTION_TITLE}/>
       <Button label='Next'/>
    </div>
}

export default Controller;