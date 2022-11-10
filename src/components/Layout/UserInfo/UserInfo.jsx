import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData, selectTransactions } from 'redux/selectors';

import s from './UserInfo.module.scss';
const UserInfo = () => {
  const { user } = useSelector(selectUserData);
  const { bonuses } = useSelector(selectTransactions);
  const { activeBonuses, blockedBonuses } = bonuses;
  return (
    <ul className={s.userInfoList}>
      <li className={s.item}>{`User id: ${user.id}`}</li>
      {user.parentId && (
        <li className={s.item}>{`ParentId: ${user.parentId}`}</li>
      )}
      <li className={s.item}>{`Email: ${user.email}`}</li>
      <li className={s.item}>{`Phone: ${user.phone}`}</li>

      {user.banned && (
        <>
          <li className={s.item}>{`Banned: ${user.banned}`}</li>
          <li className={s.item}>{`Ban Reason: ${user.banned}`}</li>
        </>
      )}

      <li className={s.ActiveBonuses}>{`Active Bonuses: ${
        activeBonuses || '0'
      }`}</li>
      <li className={s.BlockedBonuses}>
        {`Blocked Bonuses`}

        <ul className="">
          <li className={s.item}>{`Total: ${blockedBonuses?.total || '0'}`}</li>
          <li className={s.item}>{`Transfer: ${
            blockedBonuses?.personal || '0'
          }`}</li>
          <li className={s.item}>{`Cashback: ${
            blockedBonuses?.cashback || '0'
          }`}</li>
          <li className={s.item}>{`Referral: ${
            blockedBonuses?.referral || '0'
          }`}</li>
          <li className={s.item}>{`Extra: ${blockedBonuses?.extra || '0'}`}</li>
        </ul>
      </li>
    </ul>
  );
};

export default UserInfo;
