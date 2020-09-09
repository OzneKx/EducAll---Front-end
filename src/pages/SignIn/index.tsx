import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () = {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="EducAll" />

          <Form>
            <h1>Faça seu login</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail..." />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha..."
            />

            <Button type="submit">Entrar</Button>

            <a href="forgot">Esqueci minha senha</a>
          </Form>

          <a href="login">
            <FiLogIn />
            Criar Conta
          </a>
        </Content>

        <Background />
      </Container>
    </>
  );
};

export default SignIn;
