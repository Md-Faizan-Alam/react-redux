import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../actions/CounterAction';

function Counter() {
  const counter = useSelector(state => state);
  let dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Counter: {counter}</h2>
      <button onClick={()=>{dispatch(increment())}}>INCREMENT</button>
      <button onClick={()=>{dispatch(decrement())}}>DECREMENT</button>
    </div>
  );
}

export default Counter;