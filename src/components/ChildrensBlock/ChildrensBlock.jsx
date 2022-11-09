import React from 'react';
import { useSelector } from 'react-redux';
import { selectChildrensInfo } from 'redux/selectors';

import Children from 'components/Children/Children';
import ChildrensList from 'components/ChildrensList/ChildrensList';

import s from './ChildrensBlock.module.scss';

const ChildrensBlock = () => {
  const { childrensList, childrensCount } = useSelector(selectChildrensInfo);

  console.log(childrensList);
  return (
    <div className={s.childrensBlock}>
      <ChildrensList arr={childrensList} level={1} />
    </div>
  );
};

export default ChildrensBlock;
