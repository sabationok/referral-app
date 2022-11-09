import React, { useEffect } from 'react';
import Block from 'components/Block/Block';
import AppLoader from 'components/AppLoader/AppLoader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllRefChildrenThunk,
  getCountChildrenThunk,
} from 'redux/referrals/referralsThunks';
import { selectChildrensInfo } from 'redux/selectors';

import ChildrensBlock from 'components/ChildrensBlock/ChildrensBlock';
import scss from './MainPage.module.scss';

const MainPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectChildrensInfo);

  useEffect(() => {
    dispatch(getCountChildrenThunk());
    dispatch(getAllRefChildrenThunk());
  }, [dispatch]);
  return (
    <>
      <div className={scss.MainPage}>
        <Block>
          <ChildrensBlock />
        </Block>
      </div>
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default MainPage;
