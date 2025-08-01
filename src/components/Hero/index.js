import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import { Button } from '../Button'; // Assume we have a styled Button component

const HeroWrapper = styled.section`
  position: relative;
  height: 100vh;
  min-height: 550px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  max-width: 600px;
  padding: 2rem;
  animation: fadeInUp 1s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
`;

const CTAWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }
`;

const ScrollArrow = styled.div`
  width: 30px;
  height: 30px;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(-45deg);
`;

export const Hero = () => {
  return (
    <HeroWrapper id="home">
      <BackgroundImage />
      <Container>
        <HeroContent>
          <Title>Transform Your Digital Future</Title>
          <Subtitle>
            Join Nepal's premier computer institute with industry-leading courses,
            expert instructors, and job placement support to launch your tech career.
          </Subtitle>
          <CTAWrapper>
            <Button primary as="a" href="/courses">
              Explore Courses
            </Button>
            <Button primary as="a" href="/contact">
              Contact Us
            </Button>
          </CTAWrapper>
        </HeroContent>
      </Container>
      <ScrollIndicator>
        <a href="#about" style={{ textDecoration: 'none' }}>
          <ScrollArrow />
        </a>
      </ScrollIndicator>
    </HeroWrapper>
  );
};