import React from 'react';
import './Card.css';

type Props = { good: IGood };
export const Card: React.FC<Props> = ({ good }) => {
  const { id, img, title, description, price } = good;

  return (
    <li key={id} className='Card__item'>
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
      <button type='button' className='edit__btn'>Edit</button>
    </li>
  )
}

