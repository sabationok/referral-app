import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRefChildrenThunk } from 'redux/referrals/referralsThunks';
import { selectChildrensInfo } from 'redux/selectors';

import ChildrensList from 'components/ChildrensBlock/ChildrensList/ChildrensList';
import Block from 'components/Block/Block';

import s from './ChildrensBlock.module.scss';

const ChildrensBlock = () => {
  const dispatch = useDispatch();
  const { childrensList, isLoading } = useSelector(selectChildrensInfo);

  useEffect(() => {
    dispatch(getAllRefChildrenThunk());
  }, [dispatch]);
  return (
    <>
      <Block
        title="Реферальна мережа"
        subTitle="Ваша реферальна мережа"
        iconStartId="icon-persons"
      >
        <div className={s.childrensBlock}>
          <ChildrensList arr={childrensList} level={1} />
        </div>
      </Block>
    </>
  );
};

export default ChildrensBlock;
