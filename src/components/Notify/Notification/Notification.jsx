import React, {  useEffect, useRef } from 'react';
// import PropTypes from 'prop-types'
import NotifyPortal from 'components/Notify/NotifyPortal';
import scss from '../Notify.module.scss';

const Notification = ({
  message,
  timeout,
  status,
  setIsOpen,
  state,
  isOpen,
}) => {
  const statusClassName = [scss.notification, scss[`${status}`]].join(' ');
  console.log(status);
  let timer = useRef();
  useEffect(() => {
    timer.current = setTimeout(() => {
      setIsOpen(false);
      console.log('очистило', timer.current);
    }, timeout);
    console.log('таймер', timer.current);
    return () => clearTimeout(timer.current);
  });

  // function handleCloseNotifyBtn(ev) {
  //   ev.preventDefault();
  //   setIsOpen(false);
  //   clearTimeout(timer.current);
  // }
  return (
    <NotifyPortal>
      <div className={scss.backdrop}>
        <div className={statusClassName}>
          <div>{message}</div>
          <div className={scss.buttons}>
            {/* <button
              className={scss.button}
              type="button"
              onClick={ev => {
                handleCloseNotifyBtn(ev);
              }}
            >
              Close
            </button> */}
          </div>
        </div>
      </div>
    </NotifyPortal>
  );
};

Notification.propTypes = {};

export default Notification;
