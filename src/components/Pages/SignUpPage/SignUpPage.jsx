import React, { useState } from 'react';
import Block from 'components/Block/Block';
import ButtonText from 'components/ButtonText/ButtonText';
import AppLoader from 'components/AppLoader/AppLoader';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { userRegisterThunk } from 'redux/auth/authThunks';
import { selectUserData } from 'redux/selectors';
import { useParams } from 'react-router-dom';

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
    secondPassword: '',
    parentId: referrerId,
  };
  const [formData, setFormData] = useState(initialFormData);

  function handleChangeInput(ev) {
    let { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleFormSubmit(ev) {
    ev.preventDefault();
    if (formData.secondPassword !== formData.password) {
      Notiflix.Notify.failure('Паролі не збігаються');
      return;
    }
    const newUser = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
      parentId: Number(formData.parentId),
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
            <label className={s.label} htmlFor="secondPassword">
              <span className={s.span}>Повторіть пароль</span>
              <input
                className={s.input}
                name="secondPassword"
                type="password"
                id="secondPassword"
                value={formData.secondPassword}
                placeholder={'secondPassword'}
                required
                onChange={handleChangeInput}
              />
            </label>
            <label className={s.label} htmlFor="parentId">
              <span className={s.span}>{'Хто запросив (ID)'}</span>
              <input
                className={s.input}
                name="parentId"
                type="text"
                id="parentId"
                value={formData.parentId}
                placeholder={'parentId'}
                disabled={referrerId}
                onChange={handleChangeInput}
              />
            </label>
            <ButtonText type="submit">SignUp</ButtonText>
          </form>
        </Block>
      </div>
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default SignUpPage;
