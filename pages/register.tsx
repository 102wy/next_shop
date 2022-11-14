import React from 'react';
import styled from 'styled-components';
import AuthForm from '../components/AuthForm';
import Header from '../components/Header';
import HeaderBackButton from '../components/HeaderBackButton';
import { useGoback } from '../hooks/useGoback';

const Register = () => {
  const goBack = useGoback();
  return (
    <Page>
      <Header
        title="회원가입"
        headerLeft={<HeaderBackButton onClick={goBack} />}
      />
      <AuthForm mode="register"></AuthForm>
    </Page>
  );
};

export default Register;

const Page = styled.div`
  height: 100%;
`;
