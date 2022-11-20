import React, { useState } from 'react';
import ButtonText from 'components/ButtonText/ButtonText';
import AppLoader from 'components/AppLoader/AppLoader';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectUserData,
  selectTransactions,
} from 'redux/selectors';

import { postBonusTransferThunk } from 'redux/transactions/transactionsThunks';

import s from './CreateTransferForm.module.scss';

const CreateTransferForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectUserData);
  const {
    isLoading,
    bonuses: { activeBonuses },
  } = useSelector(selectTransactions);
  const initialState = {
    fromUser: user.id,
    amount: '',
    notes: '',
    toUser: '',
  };
  const [formData, setFormDAta] = useState(initialState);

  function handleFormSubmit(ev) {
    ev.preventDefault();

    let submitData = {
      fromUser: Number(user.id),
      amount: Number(formData.amount),
      notes: formData.notes,
      toUser: Number(formData.toUser),
    };
    dispatch(postBonusTransferThunk(submitData));
    setFormDAta(initialState);
  }
  function handleFormReset(ev) {
    ev.preventDefault();
    setFormDAta(initialState);
  }
  function handleInputChange(ev) {
    let { name, value } = ev.target;
    setFormDAta({ ...formData, [name]: value });
  }
  return (
    <>
      <form
        className={s.form}
        onSubmit={handleFormSubmit}
        onReset={handleFormReset}
      >
        <div className={s.inputs}>
          <label htmlFor="toUser" className={s.labelId}>
            <span className={s.title}>ID користувача</span>
            <span className={s.customInput}>
              <input
                className={s.input}
                type="text"
                name="toUser"
                id="toUser"
                placeholder="ID користувача"
                required
                disabled={!activeBonuses}
                value={formData?.toUser}
                onChange={handleInputChange}
              />
            </span>
          </label>
          <label htmlFor="amount" className={s.labelAmount}>
            <span className={s.title}>{`Кількість (${activeBonuses})`}</span>
            <span className={s.customInput}>
              <input
                className={s.input}
                type="number"
                name="amount"
                min={50}
                step={5}
                id="amount"
                placeholder="Кількість"
                required
                disabled={!activeBonuses}
                value={formData?.amount}
                onChange={handleInputChange}
              />
            </span>
          </label>
          <label htmlFor="notes" className={s.labelNotes}>
            <span className={s.title}>Призначення переказу</span>
            <span className={s.customInput}>
              <textarea
                className={s.input}
                type="text"
                name="notes"
                id="notes"
                placeholder="Призначення переказу"
                rows="2"
                required
                disabled={!activeBonuses}
                value={formData?.notes}
                onChange={handleInputChange}
              ></textarea>
            </span>
          </label>
        </div>
        <div className={s.buttons}>
          <ButtonText disabled={!activeBonuses} type="submit">Надіслати</ButtonText>
          <ButtonText disabled={!activeBonuses} type="reset">Скасувати</ButtonText>
        </div>
      </form>
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default CreateTransferForm;
