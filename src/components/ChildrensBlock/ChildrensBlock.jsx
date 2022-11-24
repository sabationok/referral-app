import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRefChildrenThunk } from 'redux/referrals/referralsThunks';
import { selectChildrensInfo } from 'redux/selectors';

import ChildrensList from 'components/ChildrensBlock/ChildrensList/ChildrensList';
import ChildrenFilter from './ChildrenFilter/ChildrenFilter';
import Block from 'components/Block/Block';

import s from './ChildrensBlock.module.scss';

const ChildrensBlock = ({ filter = true }) => {
  const dispatch = useDispatch();
  const { childrensList } = useSelector(selectChildrensInfo);

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
          <ChildrenFilter />
          <ChildrensList arr={childrensList} level={1} />
        </div>
      </Block>
    </>
  );
};

export default ChildrensBlock;
