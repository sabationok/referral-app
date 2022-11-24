import React, { useEffect } from 'react';

import Block from 'components/Block/Block';
import { useDispatch } from 'react-redux';
import {
  getActiveBonusesThunk,
  getBlockedBonusesThunk,
} from 'redux/transactions/transactionsThunks';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import TransactionsFilter from 'components/TransactionsList/TransactionsFilter/TransactionsFilter';
import s from './TransactionsBlock.module.scss';

const TransactionsBlock = ({ filter = true }) => {
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
        {filter && <TransactionsFilter />}
        <TransactionsList />
      </div>
    </Block>
  );
};

export default TransactionsBlock;
