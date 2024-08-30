import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {incNumber, decNumber} from './actions/index'
function App() {

  const myState = useSelector((state)=> state.chnageTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="card">
        <button onClick={()=> dispatch(incNumber)}>
          Increment
        </button>
        <span>count is {myState}</span> 
        <button onClick={()=> dispatch(decNumber)}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
