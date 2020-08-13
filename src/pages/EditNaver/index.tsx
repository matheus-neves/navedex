import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ModalMessage from '../../components/ModalMessage';

import formatDate from '../../utils/formatDate';

import {
  Container,
  AnimationContainer,
  FormNaver,
  ErrorMessage,
} from './styles';
import api from '../../services/api';

interface EditNaverFormData {
  name: string;
  job_role: string;
  birthdate: string;
  admission_date: string;
  project: string;
  url: string;
}

const EditNaver: React.FC = () => {
  const [dataNaver, setDataNaver] = useState<EditNaverFormData>(
    {} as EditNaverFormData,
  );
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<FormHandles>(null);

  const { naverId } = useParams<{ naverId: string }>();

  useEffect(() => {
    async function loadNaver(): Promise<void> {
      const response = await api.get<EditNaverFormData>(`/navers/${naverId}`);

      const formatData = {
        ...response.data,
        birthdate: formatDate(response.data.birthdate),
        admission_date: formatDate(response.data.admission_date),
      };

      setDataNaver(formatData);
    }

    loadNaver();
  }, [naverId]);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleSubmit = useCallback(
    async (data: EditNaverFormData) => {
      try {
        setLoading(true);
        setErrorMessage('');
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Campo obrigatório'),
          job_role: Yup.string().required('Campo obrigatório'),
          birthdate: Yup.string().required('Campo obrigatório'),
          admission_date: Yup.string().required('Campo obrigatório'),
          project: Yup.string().required('Campo obrigatório'),
          url: Yup.string().url('Url inválida').required('Campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.put(`/navers/${naverId}`, data);
        toggleModal();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        setErrorMessage('Ocorreu um erro ao atualizar, tente novamente.');
      } finally {
        setLoading(false);
      }
    },
    [toggleModal, naverId],
  );

  return (
    <Container>
      <Header />

      <ModalMessage
        title="Naver atualizado"
        text="Naver atualizado com sucesso!"
        isOpen={modalOpen}
        setIsOpen={toggleModal}
      />

      <AnimationContainer>
        <div>
          <Link to="/home">
            <MdKeyboardArrowLeft size={36} color="#000" />
          </Link>
          <strong>Editar Naver</strong>
        </div>

        <FormNaver
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={dataNaver}
        >
          <Input name="name" type="text" label="Nome" placeholder="Nome" />
          <Input
            name="job_role"
            type="text"
            label="Cargo"
            placeholder="Cargo"
          />

          <Input
            name="birthdate"
            type="text"
            label="Idade"
            placeholder="Idade"
          />
          <Input
            name="admission_date"
            type="text"
            label="Tempo de empresa"
            placeholder="Tempo de empresa"
          />

          <Input
            name="project"
            type="text"
            label="Projetos que participou"
            placeholder="Projetos que participou"
          />
          <Input
            name="url"
            type="text"
            label="Url da foto do Naver"
            placeholder="Url da foto do Naver"
          />
          <Button loading={loading} type="submit">
            Salvar
          </Button>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </FormNaver>
      </AnimationContainer>
    </Container>
  );
};

export default EditNaver;
