import React, { useRef, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ModalMessage from '../../components/ModalMessage';

import {
  Container,
  AnimationContainer,
  FormNaver,
  ErrorMessage,
} from './styles';
import api from '../../services/api';

interface CreateNaverFormData {
  name: string;
  job_role: string;
  birthdate: string;
  admission_date: string;
  project: string;
  url: string;
}

const CreateNaver: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<FormHandles>(null);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleSubmit = useCallback(
    async (data: CreateNaverFormData) => {
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

        await api.post('/navers', data);
        toggleModal();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        setErrorMessage(
          'Ocorreu um erro ao criar um novo naver, tente novamente.',
        );
      } finally {
        setLoading(false);
      }
    },
    [toggleModal],
  );

  return (
    <Container>
      <Header />

      <ModalMessage
        title="Naver criado"
        text="Naver criado com sucesso!"
        isOpen={modalOpen}
        setIsOpen={toggleModal}
      />

      <AnimationContainer>
        <div>
          <Link to="/home">
            <MdKeyboardArrowLeft size={36} color="#000" />
          </Link>
          <strong>Adicionar Naver</strong>
        </div>

        <FormNaver ref={formRef} onSubmit={handleSubmit}>
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

export default CreateNaver;
