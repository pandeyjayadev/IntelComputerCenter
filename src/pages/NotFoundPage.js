import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { Link } from 'react-router-dom';

const NotFoundWrapper = styled.div`
  padding: 6rem 0;
  text-align: center;
  min-height: 60vh;
`;

export const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <Container>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/">Return to Home</Link>
      </Container>
    </NotFoundWrapper>
  );
};