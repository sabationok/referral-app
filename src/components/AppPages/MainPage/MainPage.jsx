import React from 'react';

import ChildrensBlock from 'components/ChildrensBlock/ChildrensBlock';
import CreateTransferBlock from 'components/CreateTransferBlock/CreateTransferBlock';
import CreateFeedbackBlock from 'components/CreateFeedbackBlock/CreateFeedbackBlock';
import InvitationBlock from 'components/InvitationBlock/InvitationBlock';
import TransactionsBlock from 'components/TransactionsBlock/TransactionsBlock';
import PayBackBlock from 'components/PayBackBlock/PayBackBlock';
import SetProfileBlock from 'components/SetProfileBlock/SetProfileBlock';
import PartnersBlock from 'components/PartnersBlock/PartnersBlock';
import StatisticsBlock from 'components/StatisticsBlock/StatisticsBlock';
import BonusesBlock from 'components/BalanceBlock/BalanceBlock';

import s from './MainPage.module.scss';

const MainPage = () => {
  return (
    <>
      <div className={s.MainPage}>
        <section className={s.sectionGrid}>
          <BonusesBlock />

          <CreateTransferBlock />
        </section>

        <section className={s.sectionGrid}>
          <InvitationBlock />
          <PayBackBlock />
        </section>

        <section className={s.section}>
          <ChildrensBlock />
        </section>

        <section className={s.sectionGrid}>
          <CreateFeedbackBlock />
          <PartnersBlock />
        </section>

        <section className={s.section}>
          <TransactionsBlock />
        </section>
        <section className={s.section}>
          <StatisticsBlock />
        </section>

        <section className={s.section}>
          <SetProfileBlock />
        </section>
        {/* <section className={s.section}></section> */}
      </div>
    </>
  );
};

export default MainPage;
