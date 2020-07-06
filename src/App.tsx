import React, { useState } from 'react';
import { goods } from './api/goods';
import './App.css';
import { CardList } from './components/cardList/CardList';

//const goodsFromAPI = [...goods];

function App(this: any) {

  //part with onDeleted will be done with useState()
  const [_goods, setGoods] = useState(goods);

  let onDeleted = ( id: any ) => {
    setGoods(
      _goods.filter((el: { id: number; }) => el.id != id)
    );
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
        goods={_goods}
        onGoodDeleted={onDeleted}
      />
    </div>
  );
};

export default App;
