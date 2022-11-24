import React from 'react';
import { useSelector } from 'react-redux';
import { getBlockedBalance } from 'redux/selectors';

import s from './Cards.module.scss';
const BlockedBalanceCard = () => {
  const bonuses = useSelector(getBlockedBalance);
  // console.log(bonuses);
  return (
    <div className={s.cardContainer}>
      <div className={s.cardBlocked}>
        <div className={s.card}>
          <span>Заблоковані бонуси</span>
          <div className={s.totalBalance}>
            <span>{bonuses?.total || '0.00'}</span>
          </div>
          <div className={s.balanceStat}>
            <div className={s.wrapper}>
              <span className={s.title}>{'Cashback'}</span>
              <span className={s.value}>{bonuses?.cashback || '0.00'}</span>
            </div>
            <div className={s.wrapper}>
              <span className={s.title}>{'Referral'}</span>
              <span className={s.value}>{bonuses?.referral || '0.00'}</span>
            </div>
            <div className={s.wrapper}>
              <span className={s.title}>{'Extra'}</span>
              <span className={s.value}>{bonuses?.extra || '0.00'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockedBalanceCard;
