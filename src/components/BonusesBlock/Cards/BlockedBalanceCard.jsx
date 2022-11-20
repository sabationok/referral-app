import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/selectors';
import numberWithSpaces from './numberWithSpaces';

import s from './Cards.module.scss';
const BlockedBalanceCard = () => {
  const { bonuses } = useSelector(selectTransactions);
  const {
    total = 0,
    cashback = 0,
    referral = 0,
    extra = 0,
  } = bonuses.blockedBonuses;

  return (
    <div className={s.cardContainer}>
      <div className={s.cardBlocked}>
        <div className={s.card}>
          <span>Blocked Bonuses</span>
          <div className={s.totalBalance}>
            <span>{numberWithSpaces(total)}</span>
            <span></span>
          </div>
          <div className={s.balanceStat}>
            <div className={s.wrapper}>
              <span className={s.title}>{'cashback'}</span>
              <span className={s.value}>{numberWithSpaces(cashback)}</span>
            </div>
            <div className={s.wrapper}>
              <span className={s.title}>{'referral'}</span>
              <span className={s.value}>{numberWithSpaces(referral)}</span>
            </div>
            <div className={s.wrapper}>
              <span className={s.title}>{'extra'}</span>
              <span className={s.value}>{numberWithSpaces(extra)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockedBalanceCard;
