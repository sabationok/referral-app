import React, { useEffect } from 'react';
import Block from 'components/Block/Block';
import AppLoader from 'components/AppLoader/AppLoader';
import { useDispatch, useSelector } from 'react-redux';
import { getCountChildrenThunk } from 'redux/referrals/referralsThunks';
import { getAllTransactionsThunk } from 'redux/transactions/transactionsThunks';
import { selectChildrensInfo } from 'redux/selectors';

// import ChildrensBlock from 'components/ChildrensBlock/ChildrensBlock';
import TransactionsList from 'components/CreateBonusesBlock/CreateBonusesBlock';
import scss from './AdminPage.module.scss';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectChildrensInfo);

  useEffect(() => {
    dispatch(getCountChildrenThunk());
    dispatch(getAllTransactionsThunk());
  }, [dispatch]);
  return (
    <>
      <div className={scss.MainPage}>
        {/* <Block title="Referrals">
          <ChildrensBlock />
        </Block> */}
        <Block title="Create accrual bonuses form">
          <TransactionsList />
        </Block>
      </div>
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default AdminPage;
