import React from 'react';
// import PropTypes from 'prop-types'
import NotifyPortal from 'components/Notify/NotifyPortal';
import scss from '../Notify.module.scss';

const Alert = ({
  setIsOpen,
  isOpen,
  message,
  status,
  handleAlert,
  isAlertAccepted,
}) => {
  const statusClassName = [scss.notification, scss[`${status}`]].join(' ');
  function onAlertAccept(ev) {
    handleAlert(true);
    setIsOpen(false);
  }
  return (
    <NotifyPortal>
      <div className={scss.backdrop}>
        <form
          className={statusClassName}
          onSubmit={ev => {
            onAlertAccept(ev);
          }}
        >
          <div>{message}</div>
          <div className={scss.buttons}>
            <button className={scss.button} type="submit">
              Close
            </button>
          </div>
        </form>
      </div>
    </NotifyPortal>
  );
};

Alert.propTypes = {};

export default Alert;
