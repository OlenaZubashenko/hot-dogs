import React from 'react';
import { Card } from './card/Card';
import { goods } from './api/goods';



import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App__header">
        <div className='wrapper'>
        <button
         type='button'
         className='header__btn'
         > Add hot-dog </button>
        </div>
        
      </header>
      <ul className="Card__list">
        {goods.map((good: IGood) => <Card good={good} />)}
      </ul>

    </div>
  );
}

export default App;
