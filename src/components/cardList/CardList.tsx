import React from 'react';

import { Card } from '../card/Card';

type Props = { 
    goods: IGood[], 
    onGoodDeleted: (id:number)=>void 
};

export const CardList: React.FC<Props> = ({goods, onGoodDeleted}) => {
 
  
  return (
    <ul className="Card__list">
    {goods.map((good: IGood) => 
    <Card 
   good={good}
   onDeleted = {onGoodDeleted}
    />)}
  </ul>
  )
}

