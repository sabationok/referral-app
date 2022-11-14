import React from 'react';

import BonusCards from 'components/BonusesBlock/BonusesCards/BonusCards';
import TransactionsList from 'components/TransactionsList/TransactionsList';

import s from './BonusesBlock.module.scss';

const BonusesBlock = () => {
  return (
    <div className={s.BonusesBlock}>
      <BonusCards />
      <TransactionsList />
    </div>
  );
};

export default BonusesBlock;
