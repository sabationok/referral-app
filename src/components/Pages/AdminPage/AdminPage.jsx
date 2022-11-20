import React, { useEffect } from 'react';
import Block from 'components/Block/Block';
import AppLoader from 'components/AppLoader/AppLoader';
import { useDispatch, useSelector } from 'react-redux';
import { getCountChildrenThunk } from 'redux/referrals/referralsThunks';
import { getAllTransactionsThunk } from 'redux/transactions/transactionsThunks';
import { selectChildrensInfo } from 'redux/selectors';

import CreateBonusesBlock from 'components/CreateBonusesBlock/CreateBonusesBlock';
import sprite from 'img/sprite';
import s from './AdminPage.module.scss';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectChildrensInfo);

  useEffect(() => {
    dispatch(getCountChildrenThunk());
    dispatch(getAllTransactionsThunk());
  }, [dispatch]);
  return (
    <>
      <div className={s.MainPage}>
        <Block
          title="Створення бонусів"
          subTitle={'Тут адмін може створити бонуси для будь-якого користувача'}
          sprite={sprite}
          iconStartId='icon-settings'
          className={s.block}
        >
          <CreateBonusesBlock />
        </Block>
      </div>
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default AdminPage;
