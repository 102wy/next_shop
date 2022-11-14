import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
interface Props {
  onClick?: () => void;
}

const HeaderBackButton = ({ onClick }: Props) => {
  return (
    <IconButton onClick={onClick}>
      <Image
        src={'/images/icon_back.png'}
        width={18}
        height={18}
        alt={'뒤로가기'}
      />
    </IconButton>
  );
};

export default HeaderBackButton;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  margin-left: -0.8rem;
`;
