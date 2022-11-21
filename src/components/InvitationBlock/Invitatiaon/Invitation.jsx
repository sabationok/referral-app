import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import MyQrCode from '../MyQrCode/MyQrCode';
import { toast } from 'react-toastify';

import s from './Invitation.module.scss';

const Invitation = () => {
  const { user } = useSelector(selectUserData);
  let MY_REF_LINK = `${window.location.origin}/referral-app/signUp/${user.id}`;

  function handleCopieBtnClick() {
    navigator.clipboard.writeText(MY_REF_LINK);
    toast.info('Посилання скопійовано до буферу обміну');
  }
  async function handleShareBtnClick() {
    const shareData = {
      title:
        'Привіт. Запрошую тебе у новий кешбек сервіс. Купуй товари у партнерів сервісу та збирай кешбеки. Також ти можеш запрошувати друзів та отримувати за це додаткову винагороду. Не гай часу.',
      text: 'Привіт. Запрошую тебе у новий кешбек сервіс. Купуй товари у партнерів сервісу та збирай кешбеки. Також ти можеш запрошувати друзів та отримувати за це додаткову винагороду. Не гай часу.',
      url: MY_REF_LINK,
    };

    try {
      const batteryInfo = await navigator.getBattery();
      toast.success(`Battery level ${batteryInfo.level * 100}%`);
    } catch (err) {
      toast.error(`Error: ${err}`);
    }
    try {
      navigator.share(shareData);
      toast.success(`Link shared successfully`);
    } catch (err) {
      toast.error(`Error: ${err}`);
    }
  }
  return (
    <>
      <div className={s.InvitationGrid}>
        <span className={s.text}>
          Для реєстрації нового користувача поділіться із ним посиланням або
          дайте зісканувати QR-code :{' '}
        </span>
        <div className={s.linkBox}>
          <a
            className={s.refLink}
            href={MY_REF_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={s.refLinkText}>{MY_REF_LINK}</span>
          </a>
        </div>
        <div className={s.QRCode}>
          <MyQrCode text={MY_REF_LINK} size={80} />
        </div>
        <div className={s.buttonsWrapper}>
          <ModalOpenLink
            modalContent={
              <div className={s.QRCodeBig}>
                <MyQrCode text={MY_REF_LINK} size={150} />
              </div>
            }
          >
            <ButtonIcon
              onClick={handleCopieBtnClick}
              iconId={'icon-zoomPlus'}
            ></ButtonIcon>
          </ModalOpenLink>
          <ButtonIcon
            onClick={handleCopieBtnClick}
            iconId={'icon-copy'}
          ></ButtonIcon>
          <ButtonIcon
            onClick={handleShareBtnClick}
            iconId={'icon-send'}
          ></ButtonIcon>
        </div>
      </div>
    </>
  );
};

export default Invitation;
// <div className={s.QRCode}>
//   <img
//     src={`https://qrickit.com/api/qr.php?d=${MY_REF_LINK}&qrsize=150&e=m`}
//     alt="myQrCode"
//   />
// </div>
