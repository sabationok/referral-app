import React, { useState } from 'react';
import ModalCustom from '../ModalCustom';

const ModalOpenLink = ({ children, className, modalContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function toggleModalByLink(ev) {
    ev.preventDefault();
    setIsModalOpen(!isModalOpen);
  }
  function toggleModal(ev) {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <>
      <a className={className} onClick={toggleModalByLink} href="/">
        {children}
      </a>
      {isModalOpen && (
        <ModalCustom handleToggle={toggleModal} defaultBtn={true}>
          {modalContent}
        </ModalCustom>
      )}
    </>
  );
};

export default ModalOpenLink;
