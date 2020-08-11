import React, { useState, useEffect, useCallback } from 'react';

import ReactModal from 'react-modal';
import { MdClose } from 'react-icons/md';

import { CloseModalBtn } from './styles';

interface IModalProps {
  children: any;
  isOpen: boolean;
  customStyles?: {
    maxWidth?: string;
    padding?: string;
  };
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({
  children,
  customStyles,
  isOpen,
  setIsOpen,
}) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  const handleCloseModal = useCallback(() => {
    setIsOpen();
  }, [setIsOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={handleCloseModal}
      closeTimeoutMS={200}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          padding: !customStyles?.padding ? '32px' : customStyles.padding,
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '0px',
          width: '100%',
          maxWidth: !customStyles?.maxWidth ? '592px' : customStyles.maxWidth,
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
      <CloseModalBtn type="button" onClick={handleCloseModal}>
        <MdClose />
      </CloseModalBtn>
    </ReactModal>
  );
};

export default Modal;
