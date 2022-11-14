import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface Props {
  title?: React.ReactNode;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
}
const Header = ({
  title = <Image src={'/images/logo.png'} width={84} height={17} alt="logo" />,
  headerLeft,
  headerRight,
}: Props) => {
  return (
    <HeaderWrap>
      {headerLeft && <HeaderSide position="left">{headerLeft}</HeaderSide>}
      <Title>{title}</Title>
      {headerRight && <HeaderSide position="right">{headerRight}</HeaderSide>}
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  position: relative;
  height: 5.6rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.gray_01};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: ${(props) => props.theme.gray_05};
  font-size: 1.8rem;
  font-weight: 400;
`;

const HeaderSide = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  ${(props) => props.position} : 1.6rem;
  right: 1.6rem;
  height: 100%;
  display: flex;
  align-items: center;
`;
