import React, { useEffect } from 'react';
import Block from 'components/Block/Block';
import AppLoader from 'components/AppLoader/AppLoader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllRefChildrenThunk,
  getCountChildrenThunk,
} from 'redux/referrals/referralsThunks';
import { getAllTransactionsThunk } from 'redux/transactions/transactionsThunks';
import { selectChildrensInfo } from 'redux/selectors';

import ChildrensBlock from 'components/ChildrensBlock/ChildrensBlock';

import BonusesBlock from 'components/BonusesBlock/BonusesBlock';
import s from './MainPage.module.scss';

const MainPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectChildrensInfo);
  useEffect(() => {
    dispatch(getCountChildrenThunk());
    dispatch(getAllRefChildrenThunk());
    dispatch(getAllTransactionsThunk());
  }, [dispatch]);

  return (
    <>
      <div className={s.MainPage}>
        <section className={s.section}>
          <Block title="My bonuses">
            <BonusesBlock />
          </Block>
        </section>
        <section className={s.sectionGrid}>
          <Block title="Invite link"></Block>
          <Block title="Transfer bonuses"></Block>
          <Block title="Feedback"></Block>
        </section>
        <section className={s.section}>
          <Block title="Referrals">
            <ChildrensBlock />
          </Block>
        </section>
      </div>
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default MainPage;
