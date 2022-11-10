import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogInThunk } from 'redux/auth/authThunks';
import s from './SignInPage.module.scss';
//* email: 'tester3@mail.com';
//* name: 'tester';
//* parentId: 2;
//* password: '12345678';
//* phone: '+380677894561';
const SignInPage = () => {
  const InititalState = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(InititalState);

  const dispatch = useDispatch();
  
  function handleChangeInput(ev) {
    let { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleFormSubmit(ev) {
    ev.preventDefault();
    dispatch(userLogInThunk(formData));
    setFormData(InititalState);
  }

  return (
    <div className={s.page}>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <p>Sign In</p>
        <label className={s.label} htmlFor="email">
          <span className={s.span}>Email</span>
          <input
            className={s.input}
            name="email"
            type="email"
            id="email"
            value={formData.email}
            placeholder={'email'}
            required
            onChange={handleChangeInput}
          />
        </label>
        <label className={s.label} htmlFor="password">
          <span className={s.span}>Password</span>
          <input
            className={s.input}
            name="password"
            type="text"
            id="password"
            value={formData.password}
            placeholder={'password'}
            required
            onChange={handleChangeInput}
          />
        </label>
        <button className={s.button} type="submit">
          SignIn
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
