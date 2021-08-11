import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,dicNumber } from './actions/index';
const App = () => {
  const myState = useSelector ((state) => state.changeNumber);
  const dispatch = useDispatch();
  console.log(myState);

  
  return(
    <div className="container">

    <h1>Increment/Decrement counter</h1>
    <h4>using React and Redux</h4>
    
    <div className="quantity">
      <a className="quantity__minus" title="Decrement"> <span>-</span></a>

      <input name="quantity" type="text" className="quantity__input" value = {myState} />

      <a className="quantity__plus" title="Increment" onClick = {() =>dispatch( incNumber())}><span>+</span></a>
    </div>

        </div>
  
  )
}
export default App;