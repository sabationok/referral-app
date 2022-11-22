import React, { useState } from 'react';
import Block from 'components/Block/Block';
import ButtonText from 'components/ButtonText/ButtonText';
import PrivacyPolicyBlock from 'components/PrivacyPolicyBlock/PrivacyPolicyBlock';
import RullesBlock from 'components/RullesBlock/RullesBlock';
import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import AppLoader from 'components/AppLoader/AppLoader';

import { useDispatch, useSelector } from 'react-redux';
import { userRegisterThunk } from 'redux/auth/authThunks';
import { selectUserData } from 'redux/selectors';
import { useParams, Link } from 'react-router-dom';

import sprite from 'img/sprite';
import s from './SignUpPage.module.scss';
const SignUpPage = () => {
  const { isLoading } = useSelector(selectUserData);
  const dispatch = useDispatch();
  const { referrerId } = useParams();

  const initialFormData = {
    name: '',
    phone: '',
    email: '',
    password: '',
    repeatPassword: '',
    parentId: referrerId || '',
  };
  const [formData, setFormData] = useState(initialFormData);

  function handleChangeInput(ev) {
    let { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleFormSubmit(ev) {
    ev.preventDefault();
    if (formData.repeatPassword !== formData.password) {
      return;
    }
    const newUser = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
      parentId: Number(referrerId) || Number(formData.parentId),
    };
    dispatch(userRegisterThunk(newUser));
    setFormData(initialFormData);
  }

  return (
    <>
      <div className={s.SignUpPage}>
        <Block
          title="Реєстрація"
          subTitle={
            referrerId
              ? `Реєстрація нового користувача (Запрошення від користувача ID:${referrerId})`
              : `Реєстрація нового користувача`
          }
          sprite={sprite}
          iconStartId="icon-signUp"
        >
          <form className={s.form} onSubmit={handleFormSubmit}>
            <label className={s.label} htmlFor="name">
              <span className={s.span}>І'мя</span>
              <input
                className={s.input}
                name="name"
                type="text"
                id="name"
                value={formData.name}
                placeholder={'name'}
                required
                onChange={handleChangeInput}
              />
            </label>
            <label className={s.label} htmlFor="phone">
              <span className={s.span}>Телефон</span>
              <input
                className={s.input}
                name="phone"
                type="text"
                id="phone"
                value={formData.phone}
                placeholder={'+380'}
                required
                onChange={handleChangeInput}
              />
            </label>
            <label className={s.label} htmlFor="email">
              <span className={s.span}>Електронна адреса</span>
              <input
                className={s.input}
                name="email"
                type="email"
                id="email"
                value={formData.email}
                placeholder={'example@mail.com'}
                required
                onChange={handleChangeInput}
              />
            </label>
            <label className={s.label} htmlFor="password">
              <span className={s.span}>Пароль</span>
              <input
                className={s.input}
                name="password"
                type="password"
                id="password"
                value={formData.password}
                placeholder={'password'}
                required
                onChange={handleChangeInput}
              />
            </label>
            <label className={s.label} htmlFor="repeatPassword">
              <span className={s.span}>Повторіть пароль</span>
              <input
                className={s.input}
                name="repeatPassword"
                type="password"
                id="repeatPassword"
                value={formData.repeatPassword}
                placeholder={'repeat password'}
                required
                onChange={handleChangeInput}
              />
            </label>
            <label className={s.label} htmlFor="parentId">
              <span className={s.span}>{'Хто запросив? (ID)'}</span>
              <input
                className={s.input}
                name="parentId"
                type="text"
                id="parentId"
                value={formData.parentId}
                placeholder={'parentId'}
                disabled={referrerId}
                onChange={handleChangeInput}
                required
              />
            </label>
            <p className={s.agreament}>
              <span>
                Настискаючи кнопку реєстрації, Ви погоджуєтесь із нашою <br />
                <ModalOpenLink
                  className={s.link}
                  modalContent={<PrivacyPolicyBlock />}
                >
                  Політикою конфіденційності
                </ModalOpenLink>{' '}
                та{' '}
                <ModalOpenLink
                  className={s.link}
                  modalContent={<RullesBlock />}
                >
                  Правилами сервісу
                </ModalOpenLink>
              </span>
            </p>
            <ButtonText type="submit">SignUp</ButtonText>
            <p className={s.noProfile}>
              <span>У Вас уже є профіль? </span>
              <br />
              <span>Тоді скористуйтесь</span>
              <Link to="/signIn" className={s.link}>
                "Формою авторизації"
              </Link>
            </p>
          </form>
        </Block>
      </div>
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default SignUpPage;
