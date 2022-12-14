import React, { useState } from 'react';
import ButtonText from 'components/ButtonText/ButtonText';
import AppLoader from 'components/AppLoader/AppLoader';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData, selectTransactions } from 'redux/selectors';

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
  const [formData, setFormData] = useState(initialState);
  const formClass = !activeBonuses ? s.activeForm : s.notActiveForm;

  function handleFormSubmit(ev) {
    ev.preventDefault();

    let submitData = {
      fromUser: Number(user.id),
      amount: Number(formData.amount),
      notes: formData.notes,
      toUser: Number(formData.toUser),
    };
    dispatch(postBonusTransferThunk(submitData));
    setFormData(initialState);
  }
  function handleFormReset(ev) {
    ev.preventDefault();
    setFormData(initialState);
  }
  function handleInputChange(ev) {
    let { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <>
      <form
        className={formClass}
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
                min={5}
                id="amount"
                placeholder="Кількість"
                required
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
                value={formData?.notes}
                onChange={handleInputChange}
              ></textarea>
            </span>
          </label>
        </div>
        <div className={s.buttons}>
          <ButtonText type="submit">Надіслати</ButtonText>
          <ButtonText type="reset">Скасувати</ButtonText>
        </div>
      </form>
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default CreateTransferForm;
