import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';
import Todolist from './components/Todolist';
import Countries from './components/Countries';
import React from 'react';
import Score from './components/Score';
function App() {
  
  return (
    <Provider store={store}>
      <div className='betterview'>
        <h1>Welcome to Redux</h1>
        <Score sdf='sdf'></Score>
        <Countries></Countries>
        <Todolist></Todolist>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
