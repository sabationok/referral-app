import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import Notiflix from 'notiflix';
import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import s from './Invitation.module.scss';

const Invitation = () => {
  const { user } = useSelector(selectUserData);
  let myRefLink = `https://sabationok.github.io/referral-app/signUp/${user.id}`;

  function handleCopieBtnClick() {
    navigator.clipboard.writeText(myRefLink);
    Notiflix.Notify.info('Посилання скопійовано до буферу обміну');
  }
  return (
    <>
      <div className={s.Invitation}>
        <span className={s.text}>
          Для реєстрації нового користувача поділіться із ним посиланням або
          дайте зісканувати QR-code :{' '}
        </span>
        <div className={s.gridWrapper}>
          <a
            className={s.refLink}
            href={myRefLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{myRefLink}</span>
          </a>

          <ButtonIcon
            onClick={handleCopieBtnClick}
            iconId={'icon-copy'}
          ></ButtonIcon>
        </div>
        <div className={s.QRCode}>
          <ModalOpenLink
            modalContent={
              <div className={s.QRCodeBig}>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${myRefLink}`}
                  alt="myQrCode"
                />
              </div>
            }
          >
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${myRefLink}`}
              alt="myQrCode"
            />
          </ModalOpenLink>
        </div>
      </div>
    </>
  );
};

export default Invitation;
// <div className={s.QRCode}>
//   <img
//     src={`https://qrickit.com/api/qr.php?d=${myRefLink}&qrsize=150&e=m`}
//     alt="myQrCode"
//   />
// </div>
