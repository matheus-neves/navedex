import React from 'react';

import Modal from '../Modal';

interface IModalProps {
  isOpen: boolean;
  title: string;
  text: string;
  setIsOpen: () => void;
}

const ModalMessage: React.FC<IModalProps> = ({
  isOpen,
  title,
  text,
  setIsOpen,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h2>{title}</h2>
      <p>{text}</p>
    </Modal>
  );
};

export default ModalMessage;
