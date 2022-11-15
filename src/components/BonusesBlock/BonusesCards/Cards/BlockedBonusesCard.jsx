import React from 'react';

import s from './Cards.module.scss';
const BlockedBonusesCard = () => {
  return (
    <div className={s.cardBackground}>
      <div className={s.cardBlocked}>
        <div>Blocked Bonuses</div>
      </div>
    </div>
  );
};

export default BlockedBonusesCard;
