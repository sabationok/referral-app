import React, { useEffect } from 'react';

import BonusesCards from './BalanceCardsSlick/BonusesCards';
import Block from 'components/Block/Block';
import { useDispatch } from 'react-redux';
import {
  getActiveBonusesThunk,
  getBlockedBonusesThunk,
  getAllTransactionsThunk,
} from 'redux/transactions/transactionsThunks';

import s from './BonusesBlock.module.scss';

const BonusesBlock = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTransactionsThunk());
    dispatch(getBlockedBonusesThunk());
    dispatch(getActiveBonusesThunk());
  }, [dispatch]);

  return (
    <Block
      title="Баланс"
      subTitle="Тут відображається Ваш баланс"
      iconStartId="icon-wallet"
    >
      <div className={s.BonusesBlock}>
        <BonusesCards />
      </div>
    </Block>
  );
};

export default BonusesBlock;
