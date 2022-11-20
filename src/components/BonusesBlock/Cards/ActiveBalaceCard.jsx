import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/selectors';

import numberWithSpaces from './numberWithSpaces';

import s from './Cards.module.scss';
const ActiveBalanceCard = () => {
  const {
    bonuses: { activeBonuses = 0 },
  } = useSelector(selectTransactions);

  return (
    <div className={s.cardContainer}>
      <div className={s.cardActive}>
        <div className={s.card}>
          <span>Active Bonuses</span>
          <div className={s.totalBalance}>
            <span>{numberWithSpaces(activeBonuses)}</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveBalanceCard;
