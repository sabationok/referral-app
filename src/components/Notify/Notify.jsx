import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Notification from './Notification/Notification';
import Confirm from './Notification/Confirm';
import Alert from './Notification/Alert';

// import scss from './Notify.module.scss';

const STATUS_LIST = ['success', 'error', 'info'];
const TYPES_LIST = ['notification', 'confirm', 'alert'];

const Notify = ({ message, timeout, type, status }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isAlertAccepted, setIsAlertAccepted] = useState(false);

  useEffect(() => {
    if (STATUS_LIST.includes(status) & TYPES_LIST.includes(type)) {
      setIsOpen(true);
      return
    }
  }, [status, type]);

  function handleConfimation(result) {
    setIsConfirmed(result);
    console.log(result, result ? 'confirmed' : 'declined');
  }
  function handleAlert(result) {
    setIsAlertAccepted(result);
    console.log(result, result ? 'accepted' : 'declined');
  }

  if ((type === 'notification') & isOpen) {
    return (
      <Notification
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        status={status}
        message={message}
        timeout={timeout}
      />
    );
  }
  if ((type === 'confirm') & isOpen) {
    return (
      <Confirm
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        status={status}
        message={message}
        isConfirmed={isConfirmed}
        handleConfimation={handleConfimation}
      />
    );
  }
  if ((type === 'alert') & isOpen) {
    return (
      <Alert
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        status={status}
        message={message}
        isAlertAccepted={isAlertAccepted}
        handleAlert={handleAlert}
      />
    );
  }
};

Notify.propTypes = {};

export default Notify;
