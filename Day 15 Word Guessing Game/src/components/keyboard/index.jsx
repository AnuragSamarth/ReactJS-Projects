import './style.css'
import Button from '../button'

function Keyboard(){

    const arr = [...new Array(26)]
   let start = 65;
    return <div className='keyboard'>
        {
          arr.map((_,index)=>{
              return <Button key={index} label={String.fromCharCode(start++)} type={Button.Type.ROUNDED}/>
          })
        }
    </div>
}

export default Keyboard;