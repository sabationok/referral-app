import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveBalance } from 'redux/selectors';

import s from './Cards.module.scss';

const ActiveBalanceCard = () => {
  const activeBalance = useSelector(getActiveBalance);
  return (
    <div className={s.cardContainer}>
      <div className={s.cardActive}>
        <div className={s.card}>
          <span>Активні бонуси</span>
          <div className={s.totalBalance}>
            <span>{activeBalance}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveBalanceCard;
