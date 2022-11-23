import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChildrensBlock from 'components/ChildrensBlock/ChildrensBlock';
import CreateTransferBlock from 'components/CreateTransferBlock/CreateTransferBlock';
import CreateFeedbackBlock from 'components/CreateFeedbackBlock/CreateFeedbackBlock';
import InvitationBlock from 'components/InvitationBlock/InvitationBlock';
import TransactionsBlock from 'components/TransactionsBlock/TransactionsBlock';
import PayBackBlock from 'components/PayBackBlock/PayBackBlock';
import SetProfileBlock from 'components/SetProfileBlock/SetProfileBlock';
import PartnersBlock from 'components/PartnersBlock/PartnersBlock';
import StatisticsBlock from 'components/StatisticsBlock/StatisticsBlock';
import BalanceBlock from 'components/BalanceBlock/BalanceBlock';

import s from './MainPageMobile.module.scss';

const MainPageMobile = () => {
  const pageMap = [
    { path: 'wallet', element: <BalanceBlock /> },
    { path: 'transactions', element: <TransactionsBlock /> },
    { path: 'share', element: <InvitationBlock /> },
    { path: 'referrals', element: <ChildrensBlock /> },
    { path: 'transfer', element: <CreateTransferBlock /> },
    { path: 'feadback', element: <CreateFeedbackBlock /> },
    { path: 'payBack', element: <PayBackBlock /> },
    { path: 'partners', element: <PartnersBlock /> },
    { path: 'statistics', element: <StatisticsBlock /> },
    { path: 'settings', element: <SetProfileBlock /> },
  ];
  return (
    <div className={s.MainPage}>
      <Routes>
        <Route
          index
          element={
            <section className={s.section}>
              <BalanceBlock transictionsList />
            </section>
          }
        />
        {pageMap.map(item => (
          <Route
            path={item.path}
            element={<section className={s.section}>{item.element}</section>}
          />
        ))}
      </Routes>
    </div>
  );
};

export default MainPageMobile;
