import React from 'react';
import CreateFeedbackForm from './CreateFeedbackForm/CreateFeedbackForm';

import s from './CreateFeedbackBlock.module.scss';
const CreateFeedbackBlock = () => {
  return (
    <div className={s.FeedbackBlock}>
      <CreateFeedbackForm />
    </div>
  );
};

export default CreateFeedbackBlock;
