import React from 'react';
// import PropTypes from 'prop-types'
import NotifyPortal from 'components/Notify/NotifyPortal';
import scss from '../Notify.module.scss';

const Confirm = ({
  setIsOpen,
  isOpen,
  status,
  handleConfimation,
  message,
  isConfirmed,
}) => {
  const statusClassName = [scss.notification, scss[`${status}`]].join(' ');
  function handleFormSubmit(ev) {
    ev.preventDefault();
    handleConfimation(true);
    setIsOpen(false);
  }
  function handleFormReset(ev) {
    ev.preventDefault();
    handleConfimation(false);
    setIsOpen(false);
  }

  return (
    <NotifyPortal>
      <div className={scss.backdrop}>
        <form
          className={statusClassName}
          onSubmit={ev => {
            handleFormSubmit(ev);
          }}
          onReset={ev => {
            handleFormReset(ev);
          }}
        >
          <div>{message}</div>
          <div className={scss.buttons}>
            <button className={scss.button} type="submin">
              Accept
            </button>
            <button className={scss.button} type="reset">
              Decline
            </button>
          </div>
        </form>
      </div>
    </NotifyPortal>
  );
};

Confirm.propTypes = {};

export default Confirm;
