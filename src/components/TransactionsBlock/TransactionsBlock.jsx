import React, { useEffect } from 'react';

import Block from 'components/Block/Block';
import { useDispatch } from 'react-redux';
import {
  getActiveBonusesThunk,
  getBlockedBonusesThunk,
} from 'redux/transactions/transactionsThunks';
import TransactionsList from 'components/BalanceBlock/TransactionsList/TransactionsList';
import s from './TransactionsBlock.module.scss';

const TransactionsBlock = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlockedBonusesThunk());
    dispatch(getActiveBonusesThunk());
  }, [dispatch]);
  return (
    <Block
      title="Транзакції"
      subTitle="Усі ваші транзакції у цьому блоці"
      iconStartId="icon-transactions"
    >
      <div className={s.TransactionsBlock}>
        <TransactionsList />
      </div>
    </Block>
  );
};

export default TransactionsBlock;
