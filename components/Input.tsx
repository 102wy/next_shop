import React from 'react';
import styled from 'styled-components';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: Props) => {
  return <StyledInput {...props} />;
};

export default Input;

const StyledInput = styled.input`
  height: 4.8rem;
  border-radius: 0.4rem;
  border: 0.1rem solid ${(props) => props.theme.gray_02};
  outline: none;
  font-size: 1.6rem;
  padding: 1.2rem 1.6rem;
  color: ${(props) => props.theme.gray_05};
  &:focus {
    border: 0.1rem solid ${(props) => props.theme.primary};
  }
  &:placeholder {
    color: ${(props) => props.theme.gray_02};
  }
`;
