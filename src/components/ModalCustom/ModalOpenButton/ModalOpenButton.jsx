import React, { useState } from 'react';
import ModalCustom from 'components/ModalCustom/ModalCustom';

const ModalOpenButton = ({ children, modalChildren, className = '' }) => {
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
          {modalChildren}
        </ModalCustom>
      )}
    </>
  );
};

export default ModalOpenButton;
