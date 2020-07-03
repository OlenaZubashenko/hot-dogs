import React from 'react';
import './Card.css';

type Props = { 
  good: IGood;
  onDeleted: (id: number )=>void };
export const Card: React.FC<Props> = ({ good, onDeleted }) => {
  const { id, img, title, description, price } = good;

  
  return (
    <li key={good.id} className='Card__item'>
      <div>
        <img
          src={`img/${img}`}
          alt={title}
          className="Card__img"
        />
      </div>
      <h2 className='Card__title'>{title}</h2>
      <p className='Card__description'>{description}</p>
      <span className='Card__price'>{price}</span>
      <button
        type='button'
        className='Card__btn btn__edit'>
        Edit
      </button>
      <div className='Card-btn__wrapper'>
        <button
          type='button'
          className='Card__btn btn__upgrate'>Upgate
        </button>
        <button
        onClick={() => onDeleted(good.id)}
          type='button'
          className='Card__btn btn__delete'>Delete
        </button>
      </div>

    </li>
  )
}

