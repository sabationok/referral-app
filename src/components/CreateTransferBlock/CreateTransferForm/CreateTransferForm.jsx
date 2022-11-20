import React from 'react';
import ButtonText from 'components/ButtonText/ButtonText';
import s from './CreateTransferForm.module.scss';

const CreateTransferForm = () => {
  return (
    <form className={s.form}>
      <div className={s.inputs}></div>
      <div className={s.buttons}>
        <ButtonText>Надіслати</ButtonText>
        <ButtonText>Скасувати</ButtonText>
      </div>
    </form>
  );
};

export default CreateTransferForm;
