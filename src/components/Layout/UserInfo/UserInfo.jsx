import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData, selectTransactions } from 'redux/selectors';

import s from './UserInfo.module.scss';
const UserInfo = () => {
  const { user, admin } = useSelector(selectUserData);
  const { bonuses } = useSelector(selectTransactions);
  const { activeBonuses, blockedBonuses } = bonuses;
  return (
    <ul className={s.userInfoList}>
      <li className={s.item}>
        {admin.isAdmin ? (
          <span className={s.admin}>{`Admin id: ${user.id}`}</span>
        ) : (
          <span>{`User id: ${user.id}`}</span>
        )}
      </li>
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

      <li className={s.ActiveBonuses}>
        <span>Active Bonuses:</span>
        <span>{activeBonuses || '0'}</span>
      </li>
      <li className={s.BlockedBonuses}>
        {`Blocked Bonuses`}

        <ul className={s.list}>
          <li className={s.item}>
            <span>Total:</span>
            <span>{blockedBonuses?.total || '0'}</span>
          </li>
          <li className={s.item}>
            <span>Personal:</span>
            <span>{blockedBonuses?.personal || '0'}</span>
          </li>
          <li className={s.item}>
            <span>Cashback:</span>
            <span>{blockedBonuses?.cashback || '0'}</span>
          </li>
          <li className={s.item}>
            <span>Referral:</span>
            <span>{blockedBonuses?.referral || '0'}</span>
          </li>
          <li className={s.item}>
            <span>Extra:</span>
            <span>{blockedBonuses?.extra || '0'}</span>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default UserInfo;
