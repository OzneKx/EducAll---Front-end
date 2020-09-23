import React from 'react';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

interface SignInData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  return (
    <>
      <Content>
        <Form>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forget">Esqueci minha senha</a>
        </Form>

        <Link to="signup">
          <FiLogIn />
          Criar conta
        </Link>

        <Background />
      </Content>
    </>
  );
};

export default SignIn;
