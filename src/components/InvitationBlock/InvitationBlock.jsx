import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import Block from 'components/Block/Block';

import s from './InvitationBlock.module.scss';

const InvitationBlock = () => {
  const { user } = useSelector(selectUserData);
  return (
    <Block
      title="Запрошення"
      subTitle="Ваш персональний лінк для запрошення та QR-Code який можна відсканувати "
      iconStartId="icon-share"
    >
      <span className={s.inWork}>
        My ref link:{' '}
        <a
          className={s.refLink}
          href={`https://sabationok.github.io/referral-app/signUp/${user.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >{`https://sabationok.github.io/referral-app/signUp/${user.id}`}</a>
      </span>
    </Block>
  );
};

export default InvitationBlock;
