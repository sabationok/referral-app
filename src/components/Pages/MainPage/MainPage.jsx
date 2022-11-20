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

import sprite from 'img/sprite';

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
          <Block
            title="Баланс"
            subTitle="Тут відображається Ваш баланс"
            sprite={sprite}
            iconStartId="icon-wallet"
          >
            <BonusesBlock />
          </Block>
        </section>
        <section className={s.sectionGrid}>
          <Block
            title="Invite link"
            subTitle="Ваш персональний лінк для запрошення та QR Code який можна відсканувати "
            sprite={sprite}
            iconStartId="icon-share"
          >
            <span className={s.inWork}>In work ...</span>
          </Block>
          <Block
            title="Transfer bonuses"
            subTitle="Для переказу введіть ID користувача та суму для списання бонусів"
            sprite={sprite}
            iconStartId="icon-present"
          >
            <span className={s.inWork}>In work ...</span>
          </Block>
          <Block
            title="Feedback"
            subTitle="Надішліть повідомлення і наш менеджер з Вами звʼяжеться"
            sprite={sprite}
            iconStartId="icon-mail"
          >
            <span className={s.inWork}>In work ...</span>
          </Block>
        </section>
        <section className={s.section}>
          <Block
            title="Referrals"
            subTitle="Ваша реферальна мережа"
            sprite={sprite}
            iconStartId="icon-persons"
          >
            <ChildrensBlock />
          </Block>
        </section>

        <section className={s.section}>
          <Block
            title="Statistics"
            subTitle="Will be in future ..."
            sprite={sprite}
            iconStartId="icon-stat"
          >
            <span className={s.inWork}>In work ...</span>
          </Block>
        </section>
        <section className={s.section}>
          <Block
            title="Partners"
            subTitle="Will be in future ..."
            sprite={sprite}
            iconStartId="icon-partners"
          >
            <span className={s.inWork}>In work ...</span>
          </Block>
        </section>
      </div>
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default MainPage;
