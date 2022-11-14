import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return <Wrap>{children}</Wrap>;
};

export default Layout;

const Wrap = styled.div`
  height: 100%;
`;
