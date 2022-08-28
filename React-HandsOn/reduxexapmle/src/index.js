import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
// //Action - for naming purpose only
// //Action is a function that returns an object.
// const increment =()=> {
// return{
//   type: 'INCREMENT'
// }
// }

// const decrement =()=> {
//   return{
//     type: 'DECREMENT'
//   }
//   }


// //Reducer - action performed on one state is updated in the state present in gloabalized store.
// //Reducer is also a function that returns a oject.
// const counter =(state=0, action)=> {
//     switch(action.type){
//         case 'INCREMENT':
//           return state + 1;
//         case 'DECREMENT':
//           return state - 1;

//     }
// }


// //Store - Globalized state
// let store = createStore(counter);


// //Display it in the console
// store.subscribe(() => console.log(store.getState()));

// //dispatch - execute the action 
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
