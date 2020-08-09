import React, { useRef, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';
import { Container } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      await signIn(data);

      history.push('/home');
    },
    [signIn, history],
  );

  return (
    <Container>
      <img src={logo} alt="nave.rs" />

      <h1>Faça seu logon</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" type="email" label="E-mail" placeholder="E-mail" />
        <Input
          name="password"
          type="password"
          label="Senha"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>
      </Form>

      <p>
        Não possui uma conta? <Link to="/cadastrar">Cadastrar</Link>
      </p>
    </Container>
  );
};

export default SignIn;
