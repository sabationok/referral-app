import React, { useState } from 'react';
import ModalCustom from 'components/ModalCustom/ModalCustom';
import PrivacyPolicy from 'components/PrivacyPolicyBlock/PrivacyPolicyBlock';

import s from './ModalButton.module.scss';
const ModalButton = ({ children, className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function toggleModal(ev) {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <>
      <button className={className} type="button" onClick={toggleModal}>
        {children}
      </button>
      {isModalOpen && (
        <ModalCustom handleToggle={toggleModal} defaultBtn={true}>
          <PrivacyPolicy />
        </ModalCustom>
      )}
    </>
  );
};

export default ModalButton;
