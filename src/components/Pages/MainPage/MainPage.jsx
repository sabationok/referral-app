import React, { useEffect } from 'react';
import Block from 'components/Block/Block';
import AppLoader from 'components/AppLoader/AppLoader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllRefChildrenThunk,
  getCountChildrenThunk,
} from 'redux/referrals/referralsThunks';
import { getAllTransactionsThunk } from 'redux/transactions/transactionsThunks';
import { selectChildrensInfo, selectUserData } from 'redux/selectors';

import ChildrensBlock from 'components/ChildrensBlock/ChildrensBlock';
import CreateTransferBlock from 'components/CreateTransferBlock/CreateTransferBlock';
import CreateFeedbackBlock from 'components/CreateFeedbackBlock/CreateFeedbackBlock';
import BonusesBlock from 'components/BonusesBlock/BonusesBlock';

import sprite from 'img/sprite';

import s from './MainPage.module.scss';

const MainPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectChildrensInfo);
  const { user } = useSelector(selectUserData);
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
            title="Запрошення"
            subTitle="Ваш персональний лінк для запрошення та QR Code який можна відсканувати "
            sprite={sprite}
            iconStartId="icon-share"
          >
            <span className={s.inWork}>In work ...</span>
            <span className={s.inWork}>
              My ref link:{' '}
              <a
                className={s.refLink}
                href={`https://sabationok.github.io/referral-app/signUp/${user.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >{`https://sabationok.github.io/referral-app/signUp/${user.id}`}</a>
            </span>
          </Block>
          <Block
            title="Поділитись бонусами"
            subTitle="Для переказу введіть ID користувача та суму для списання бонусів"
            sprite={sprite}
            iconStartId="icon-present"
          >
            <CreateTransferBlock />
          </Block>
        </section>

        <section className={s.section}>
          <Block
            title="Реферальна мережа"
            subTitle="Ваша реферальна мережа"
            sprite={sprite}
            iconStartId="icon-persons"
          >
            <ChildrensBlock />
          </Block>
        </section>

        <section className={s.sectionGrid}>
          <Block
            title="Подати заявку на виплату"
            subTitle="Will be in future ..."
            sprite={sprite}
            iconStartId="icon-cardOk"
          >
            <span className={s.inWork}>In work ...</span>
          </Block>
          <Block
            title="Зворотній зв'язок"
            subTitle="Надішліть повідомлення і наш менеджер з Вами звʼяжеться"
            sprite={sprite}
            iconStartId="icon-mail"
          >
            <CreateFeedbackBlock />
          </Block>
        </section>

        <section className={s.section}>
          <Block
            title="Статистика"
            subTitle="Will be in future ..."
            sprite={sprite}
            iconStartId="icon-stat"
          >
            <span className={s.inWork}>In work ...</span>
          </Block>
        </section>

        <section className={s.section}>
          <Block
            title="Наші партнери"
            subTitle="Will be in future ..."
            sprite={sprite}
            iconStartId="icon-partners"
          >
            <span className={s.inWork}>In work ...</span>
          </Block>
        </section>
        <section className={s.section}>
          <Block
            title="Налаштування профілю"
            subTitle="Will be in future ..."
            sprite={sprite}
            iconStartId="icon-settings"
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
