import React, { useRef, useCallback, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';
import { Container, AnimationContainer, ErrorMessage } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        setLoading(true);
        setErrorMessage('');
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn(data);

        history.push('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        setErrorMessage(
          'Erro ao efetuar o login, verifique as credenciais digitadas e tente novamente.',
        );
      } finally {
        setLoading(false);
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <AnimationContainer>
        <img src={logo} alt="nave.rs" />

        <h1>Faça seu logon</h1>

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

          <Button loading={loading} type="submit">
            Entrar
          </Button>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Form>

        <p>
          Não possui uma conta? <Link to="/cadastrar">Cadastrar</Link>
        </p>
      </AnimationContainer>
    </Container>
  );
};

export default SignIn;
