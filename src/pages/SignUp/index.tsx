import React, { useRef, useCallback, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';
import { Container, AnimationContainer } from './styles';
import { ErrorMessage } from '../SignIn/styles';

interface SignUpFormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        setLoading(true);
        setErrorMessage('');
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string()
            .required('Por favor confirme a sua senha')
            .when('password', {
              is: password => !!(password && password.length > 0),
              then: Yup.string().oneOf(
                [Yup.ref('password')],
                'Confirmação incorreta',
              ),
            }),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { email, password } = data;

        await api.post('/users/signup', { email, password });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        setErrorMessage('Erro ao efetuar o cadastro, tente novamente.');
      } finally {
        setLoading(false);
      }
    },
    [history],
  );

  return (
    <Container>
      <AnimationContainer>
        <img src={logo} alt="nave.rs" />

        <h1>Faça seu cadastro</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            label="E-mail"
            placeholder="E-mail"
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            placeholder="Senha"
          />

          <Input
            name="password_confirmation"
            type="password"
            label="Confirmação da senha"
            placeholder="Confirmação da senha"
          />

          <Button loading={loading} type="submit">
            Entrar
          </Button>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Form>

        <Link to="/">
          <FiArrowLeft size={16} />
          Voltar
        </Link>
      </AnimationContainer>
    </Container>
  );
};

export default SignUp;
