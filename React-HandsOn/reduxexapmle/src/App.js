import './App.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, log, inc5, dec5} from  './actions';

function App() {
const counter = useSelector(state=> state.counter );
const isLogged = useSelector(state=> state.isLogged );
const dispatch = useDispatch();
  
return (
    <div className="App"> 
    <h1>Couter {counter}</h1>
    <button onClick={
      ()=> dispatch(increment())}>
        +
    </button>
    <button onClick={
      ()=> dispatch(decrement())}>
        -
    </button>
    <button onClick={
      ()=> dispatch(inc5(5))}>
        +5
    </button>
    <button onClick={
      ()=> dispatch(dec5(5))}>
        -5
    </button>
    
    {isLogged ? <h3> User Logged in</h3>: <h3> User Logged Out</h3>}
    <button onClick={
      ()=> dispatch(log())}>
        Login/Logout
    </button>
    </div>

  );
}

export default App;
