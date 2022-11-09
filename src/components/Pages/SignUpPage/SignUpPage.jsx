import React, { useState } from 'react';
import { nanoid, customAlphabet } from 'nanoid';
import { useDispatch } from 'react-redux';
import { userRegisterThunk } from 'redux/auth/authThunks';
import s from './SignUpPage.module.scss';
const randomPhone = customAlphabet('0123456789', 9);
const SignUpPage = () => {
  const dispatch = useDispatch();
  const initialFormData = {
    name: '',
    phone: '',
    email: '',
    password: '',
    parentId: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  function handleChangeInput(ev) {
    let { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleFormSubmit(ev) {
    ev.preventDefault();
    const newUser = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
      parentId: Number(formData.parentId),
    };
    const testUser = {
      name: nanoid(8),
      phone: `+380${randomPhone()}`,
      email: `${nanoid(10)}@mail.com`,
      password: nanoid(10),
      parentId: 71,
    };

    console.log(testUser);
    dispatch(userRegisterThunk(testUser));
    setFormData(initialFormData);
  }

  return (
    <div className={s.page}>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <p>Register</p>
        <label className={s.label} htmlFor="name">
          <span className={s.span}>Name</span>
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
          <span className={s.span}>Phone</span>
          <input
            className={s.input}
            name="phone"
            type="text"
            id="phone"
            defaultValue={`+380${formData.phone}`}
            // value={formData.phone}
            placeholder={'phone'}
            required
            onChange={handleChangeInput}
          />
        </label>
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
        <label className={s.label} htmlFor="parentId">
          <span className={s.span}>Referer</span>
          <input
            className={s.input}
            name="parentId"
            type="text"
            id="parentId"
            value={formData.parentId}
            placeholder={'parentId'}
            onChange={handleChangeInput}
          />
        </label>
        <button className={s.button} type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
