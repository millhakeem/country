import React from 'react';
import styled from 'styled-components';
import { Contaner } from './Container';

const Wrapper = styled.main`
    padding: 2rem 0;

    @media (min-width: 767px) {
        padding: 4rem 0;
    }
`;

export const Main = ({children}) => {
  return (
    <Wrapper>
        <Contaner>
            {children}
        </Contaner>
    </Wrapper>
  )
}
