import React from 'react';
import CreateFeedbackForm from './CreateFeedbackForm/CreateFeedbackForm';
import Block from 'components/Block/Block';

import s from './CreateFeedbackBlock.module.scss';
const CreateFeedbackBlock = () => {
  return (
    <Block
      title="Зворотній зв'язок"
      subTitle="Надішліть повідомлення і наш менеджер з Вами звʼяжеться"
      iconStartId="icon-mail"
    >
      <div className={s.FeedbackBlock}>
        <CreateFeedbackForm />
      </div>
    </Block>
  );
};

export default CreateFeedbackBlock;
