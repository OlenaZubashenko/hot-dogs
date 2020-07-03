import React from 'react';
import { CardList } from './components/cardList/CardList';
import { goods } from './api/goods';
import './App.css';

const goodsFromAPI = [...goods];

function App(this: any) {

  //part with onDeleted will be done with useState()
  const state = {
  goods: goodsFromAPI
}


 let onDeleted = (id: any) => {
  this.setState((prevState: { goods: any[]; }) => ({
    goods: prevState.goods.filter((el: { id: any; }) => el.id != id)
  }));
};
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
      <CardList 
            goods={goodsFromAPI}
            onGoodDeleted ={onDeleted}
            />
    </div>
  );
}

export default App;
