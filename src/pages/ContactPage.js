import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';

const ContactWrapper = styled.div`
  padding: 6rem 0 4rem;
  min-height: 80vh;
`;

export const ContactPage = () => {
  return (
    <ContactWrapper>
      <Container>
        <h1>Contact Us</h1>
        <p>Contact information and form...</p>
      </Container>
    </ContactWrapper>
  );
};