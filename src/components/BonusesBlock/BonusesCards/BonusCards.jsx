import React from 'react';

import ActiveBonusesCard from './Cards/ActiveBonusesCard';
import BlockedBonusesCard from './Cards/BlockedBonusesCard';

import s from './BonusCards.module.scss';
const BonusCards = () => {
  return (
    <div className={s.bonusCards}>
      <ActiveBonusesCard />
      <BlockedBonusesCard />
    </div>
  );
};

export default BonusCards;
