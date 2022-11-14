import React from 'react';
import styled from 'styled-components';
import AuthForm from '../components/AuthForm';
import Header from '../components/Header';
import HeaderBackButton from '../components/HeaderBackButton';
import { useGoback } from '../hooks/useGoback';

const Login = () => {
  const goBack = useGoback();
  return (
    <Page>
      <Header
        title="로그인"
        headerLeft={<HeaderBackButton onClick={goBack} />}
      />
      <AuthForm mode="login" />
    </Page>
  );
};

export default Login;

const Page = styled.div`
  height: 100%;
`;
