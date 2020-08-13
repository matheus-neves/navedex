import React, { useState, useEffect, useCallback } from 'react';

import { Transition } from 'react-transition-group';

import { Link, useHistory } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { RiLoaderLine } from 'react-icons/ri';

import Header from '../../components/Header';
import ModalDetailNaver from '../../components/ModalDetailNaver';
import ModalConfirmation from '../../components/ModalConfirmation';
import ModalMessage from '../../components/ModalMessage';

import api from '../../services/api';
import formatDate from '../../utils/formatDate';

import {
  Container,
  NaversHeader,
  LoaderContainer,
  NaversList,
  NaverItem,
} from './styles';

interface Naver {
  name: string;
  job_role: string;
  birthdate: string;
  admission_date: string;
  project: string;
  url: string;
  id: string;
}

const Home: React.FC = () => {
  const [navers, setNavers] = useState<Naver[]>([]);
  const [loading, setLoading] = useState(false);
  const [naverDetail, setNaverDetail] = useState<Naver>({} as Naver);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    async function loadNavers(): Promise<void> {
      setLoading(true);
      const response = await api.get<Naver[]>('/navers');

      const formattedData = response.data.map(data => ({
        ...data,
        birthdate: formatDate(data.birthdate),
        admission_date: formatDate(data.admission_date),
      }));

      setNavers(formattedData);
      setLoading(false);
    }
    loadNavers();
  }, []);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [setModalOpen, modalOpen]);

  const toggleConfirmModal = useCallback(() => {
    setConfirmModalOpen(!confirmModalOpen);
  }, [setConfirmModalOpen, confirmModalOpen]);

  const toggleInfoModalOpen = useCallback(() => {
    setInfoModalOpen(!infoModalOpen);
  }, [setInfoModalOpen, infoModalOpen]);

  const openModal = useCallback(
    naver => {
      if (naver.id) {
        setNaverDetail(naver);
        toggleModal();
      }
    },
    [toggleModal],
  );

  const openConfirmModal = useCallback(
    naver => {
      if (naver.id) {
        setNaverDetail(naver);
        toggleConfirmModal();
      }
    },
    [toggleConfirmModal],
  );

  const handleDeleteNaver = async (): Promise<void> => {
    await api.delete(`/navers/${naverDetail.id}`);

    const filteredNavers = navers.filter(naver => naver.id !== naverDetail.id);

    setNavers(filteredNavers);

    toggleInfoModalOpen();
  };

  const handleEditNaver = (id: string): void => {
    history.push(`/edit-naver/${id}`);
  };

  return (
    <Container>
      <Header />

      <ModalMessage
        title="Naver excluído"
        text="Naver excluído com sucesso!"
        isOpen={infoModalOpen}
        setIsOpen={toggleInfoModalOpen}
      />

      <ModalDetailNaver
        isOpen={modalOpen}
        naverDetail={naverDetail}
        setIsOpen={toggleModal}
        handleDeleteNaver={toggleConfirmModal}
      />

      <ModalConfirmation
        isOpen={confirmModalOpen}
        setIsOpen={toggleConfirmModal}
        handleDeleteNaver={handleDeleteNaver}
      />

      <main>
        <NaversHeader>
          <h1>Navers</h1>

          <Link to="/create-naver">Adicionar Naver</Link>
        </NaversHeader>

        {loading ? (
          <LoaderContainer>
            <RiLoaderLine size={40} />
          </LoaderContainer>
        ) : (
          <NaversList appear={!loading}>
            {navers.map(naver => (
              <Transition in timeout={600} key={naver.id}>
                {state => (
                  <NaverItem state={state}>
                    <img
                      src={naver.url}
                      alt={naver.name}
                      onClick={() => openModal(naver)}
                    />
                    <strong>{naver.name}</strong>
                    <p>{naver.job_role}</p>
                    <div>
                      <button
                        type="button"
                        onClick={() => openConfirmModal(naver)}
                      >
                        <FaTrash />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleEditNaver(naver.id)}
                      >
                        <MdEdit size={18} />
                      </button>
                    </div>
                  </NaverItem>
                )}
              </Transition>
            ))}
          </NaversList>
        )}
      </main>
    </Container>
  );
};

export default Home;
