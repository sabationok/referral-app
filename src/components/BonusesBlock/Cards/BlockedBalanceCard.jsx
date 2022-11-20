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
          <span>Blocked Bonuses</span>
          <div className={s.totalBalance}>
            <span>{bonuses?.total || '0.00'}</span>
          </div>
          <div className={s.balanceStat}>
            <div className={s.wrapper}>
              <span className={s.title}>{'cashback'}</span>
              <span className={s.value}>{bonuses?.cashback || '0.00'}</span>
            </div>
            <div className={s.wrapper}>
              <span className={s.title}>{'referral'}</span>
              <span className={s.value}>{bonuses?.referral || '0.00'}</span>
            </div>
            <div className={s.wrapper}>
              <span className={s.title}>{'extra'}</span>
              <span className={s.value}>{bonuses?.extra || '0.00'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockedBalanceCard;
