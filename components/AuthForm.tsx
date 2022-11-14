import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import LabelInput from './LabelInput';
import QuestionLink from './QuestionLink';

interface Props {
  mode: 'login' | 'register';
}
const authDescriptions = {
  login: {
    usernamePlaceholder: '아이디를 입력하세요',
    passwordPlaceholder: '비밀번호를 입력하세요',
    buttonText: '로그인',
    actionText: '회원가입',
    question: '계정이 없으신가요?',
    actionLink: '/register',
  },
  register: {
    usernamePlaceholder: '5~20자 사이의 영어 소문자, 숫자 입력',
    passwordPlaceholder: '8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력',
    buttonText: '회원가입',
    actionText: '로그인',
    question: '계정이 이미 있으신가요?',
    actionLink: '/login',
  },
};

const AuthForm = ({ mode }: Props) => {
  const isRegister = mode === 'register';
  const {
    usernamePlaceholder,
    passwordPlaceholder,
    buttonText,
    actionLink,
    actionText,
    question,
  } = authDescriptions[mode];
  return (
    <Wrap>
      <InputGroup>
        <LabelInput
          label="아이디"
          name="username"
          placeholder={usernamePlaceholder}
        />
        <LabelInput
          label="비밀번호"
          name="password"
          placeholder={passwordPlaceholder}
        />
      </InputGroup>
      <ActionsBox>
        <Button layoutMode="fullWidth">{buttonText}</Button>
        <QuestionLink
          name={actionText}
          question={question}
          to={actionLink}
        ></QuestionLink>
      </ActionsBox>
    </Wrap>
  );
};

export default AuthForm;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  justify-content: space-between;
  height: calc(100% - 56px);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const ActionsBox = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 2.4rem;
`;
