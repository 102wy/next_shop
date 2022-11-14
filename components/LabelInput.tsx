import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Input, { Props as InputProps } from './input';

interface Props extends InputProps {
  label: string;
}

const LabelInput = ({ label, ...rest }: Props) => {
  const [focused, setFocused] = useState(false);
  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
  };
  return (
    <Wrap>
      <Label focused={focused}>{label}</Label>
      <Input onFocus={onFocus} onBlur={onBlur} {...rest} />
    </Wrap>
  );
};

export default LabelInput;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label<{ focused?: boolean }>`
  font-size: 1.6rem;
  color: ${(props) => props.theme.gray_04};
  line-height: 1.5;
  margin-bottom: 0.8rem;
  ${(props) =>
    props.focused &&
    css`
      color: ${(props) => props.theme.primary};
    `}
`;
