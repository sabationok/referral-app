import React, { useState } from 'react';
import ButtonText from 'components/ButtonText/ButtonText';
// import {  useDispatch } from 'react-redux';

import s from './CreateFeedbackForm.module.scss';
const CreateFeedbackForm = () => {
  // const dispatch = useDispatch();

  const initialState = {
    feedback: '',
  };
  const [formData, setFormData] = useState(initialState);

  function handleFormSubmit(ev) {
    ev.preventDefault();
    // let submitData = {
    //   feedback: formData.feedback,
    // };
    // dispatch(postFeedbackThunk(submitData));
    alert(formData.feedback)
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
    <form
      className={s.activeForm}
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
    >
      <div className={s.inputs}>
        <label htmlFor="feedback" className={s.labelFeedback}>
          <span className={s.title}>Напишіть ваш запит у формі нижче</span>
          <span className={s.customInput}>
            <textarea
              className={s.input}
              type="text"
              name="feedback"
              id="feedback"
              placeholder="Введіть текст"
              rows="2"
              required
              value={formData?.feedback}
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
  );
};

export default CreateFeedbackForm;
