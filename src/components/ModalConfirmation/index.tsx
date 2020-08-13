import React, { useCallback } from 'react';

import Modal from '../Modal';
import Button from '../Button';

import { ActionsContainer } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleDeleteNaver: () => void;
}

const ModalConfirmation: React.FC<IModalProps> = ({
  isOpen,
  handleDeleteNaver,
  setIsOpen,
}) => {
  const handleConfirmDelete = useCallback(async () => {
    setIsOpen();
    handleDeleteNaver();
  }, [setIsOpen, handleDeleteNaver]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h2>Excluir Naver</h2>
      <p>Tem certeza que deseja excluir este Naver?</p>

      <ActionsContainer>
        <button type="button" onClick={() => setIsOpen()}>
          Cancelar
        </button>
        <Button type="button" onClick={() => handleConfirmDelete()}>
          Excluir
        </Button>
      </ActionsContainer>
    </Modal>
  );
};

export default ModalConfirmation;
