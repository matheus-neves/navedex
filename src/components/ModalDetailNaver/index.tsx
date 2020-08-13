import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import Modal from '../Modal';

import { DetailContainer, ActionsContainer } from './styles';

interface NaverDetailData {
  id: string;
  name: string;
  job_role: string;
  birthdate: string;
  admission_date: string;
  project: string;
  url: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleDeleteNaver: () => void;
  naverDetail: NaverDetailData;
}

const ModalDetailNaver: React.FC<IModalProps> = ({
  isOpen,
  naverDetail,
  handleDeleteNaver,
  setIsOpen,
}) => {
  const handleConfirmDelete = useCallback(async () => {
    setIsOpen();
    handleDeleteNaver();
  }, [setIsOpen, handleDeleteNaver]);

  const history = useHistory();

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      customStyles={{ maxWidth: '1006px', padding: '0px' }}
    >
      <DetailContainer>
        <img src={naverDetail.url} alt={naverDetail.name} />
        <div>
          <h2>{naverDetail.name}</h2>
          <p>{naverDetail.job_role}</p>

          <strong>Idade</strong>
          <p>{naverDetail.birthdate}</p>

          <strong>Tempo de empresa</strong>
          <p>{naverDetail.admission_date}</p>

          <strong>Projetos que participou</strong>
          <p>{naverDetail.project}</p>

          <ActionsContainer>
            <button type="button" onClick={() => handleConfirmDelete()}>
              <FaTrash />
            </button>

            <button
              type="button"
              onClick={() => history.push(`/edit-naver/${naverDetail.id}`)}
            >
              <MdEdit size={18} />
            </button>
          </ActionsContainer>
        </div>
      </DetailContainer>
    </Modal>
  );
};

export default ModalDetailNaver;
