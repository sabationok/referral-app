import React from 'react';

import BonusesCards from './BalanceCardsSlick/BonusesCards';

import s from './BonusesBlock.module.scss';

const BonusesBlock = () => {
  return (
    <div className={s.BonusesBlock}>
      <BonusesCards />
    </div>
  );
};

export default BonusesBlock;