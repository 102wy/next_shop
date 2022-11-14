import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
interface Props {
  question: string;
  name: string;
  to: string;
  className?: string;
}

const QuestionLink = ({ question, name, to, className }: Props) => {
  return (
    <Wrap>
      {question} <Link href={to}>{name}</Link>
    </Wrap>
  );
};

export default QuestionLink;

const Wrap = styled.div`
  font-size: 1.6rem;
  color: ${(props) => props.theme.gray_03};
  a {
    color: ${(props) => props.theme.gray_05};
    text-decoration: underline;
    font-weight: 600;
  }
`;
