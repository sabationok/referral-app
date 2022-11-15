import React from 'react';

import s from './Cards.module.scss';
const ActiveBonusesCard = () => {
  return (
    <div className={s.cardBackground}>
      <div className={s.cardActive}>
        <div>Active Bonuses</div>
      </div>
    </div>
  );
};

export default ActiveBonusesCard;
