import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  layoutMode?: 'inline' | 'fullWidth';
}
interface Props extends React.HTMLAttributes<HTMLButtonElement>, ButtonProps {}
const Button = ({ layoutMode = 'inline', ...rest }: Props) => {
  return <StyledButton layoutMode={layoutMode} {...rest}></StyledButton>;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.primary};
  color: white;
  border: none;
  height: 4.8rem;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;
  padding: 0 1.6rem;
  font-weight: 600;
  border-radius: 0.4rem;
  ${(props) =>
    props.layoutMode === 'fullWidth' &&
    css`
      width: 100%;
    `}
`;

export default Button;
