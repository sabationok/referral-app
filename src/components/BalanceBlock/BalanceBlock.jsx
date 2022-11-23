import React, { useEffect } from 'react';

import BalanceCards from './BalanceCardsSlick/BalanceCards';
import Block from 'components/Block/Block';
import { useDispatch } from 'react-redux';
import {
  getActiveBonusesThunk,
  getBlockedBonusesThunk,
  getAllTransactionsThunk,
} from 'redux/transactions/transactionsThunks';

import s from './BalanceBlock.module.scss';

const BalanceBlock = () => {
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
        <BalanceCards />
      </div>
    </Block>
  );
};

export default BalanceBlock;
