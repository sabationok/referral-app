import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/selectors';

import numberWithSpaces from './numberWithSpaces';

import s from './Cards.module.scss';
const ActiveBalanceCard = () => {
  const { bonuses } = useSelector(selectTransactions);
  console.log(bonuses);

  return (
    <div className={s.cardContainer}>
      <div className={s.cardActive}>
        <span>Active Bonuses</span>
        <div className={s.totalBalance}>
          <span>{numberWithSpaces(bonuses.activeBonuses)}</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default ActiveBalanceCard;
