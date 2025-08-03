import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../components/Container';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaExclamationTriangle, FaRocket } from 'react-icons/fa';

// Theme colors
const theme = {
  colors: {
    primary: '#031469ff',
    secondary: '#1e40af',
    accent: '#3b82f6',
    light: '#f8fafc',
    dark: '#051b3dff',
    text: '#334155',
  }
};

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(2deg); }
  50% { transform: translateY(-5px) rotate(-1deg); }
  75% { transform: translateY(-15px) rotate(1deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-15px); }
  60% { transform: translateY(-7px); }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const NotFoundWrapper = styled.div`
  padding: 8rem 0 4rem;
  text-align: center;
  min-height: 100vh;
  background: linear-gradient(135deg, 
    ${theme.colors.light} 0%, 
    rgba(59, 130, 246, 0.05) 50%, 
    ${theme.colors.light} 100%
  );
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(30, 64, 175, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(3, 20, 105, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const ErrorCode = styled.div`
  font-size: clamp(8rem, 20vw, 12rem);
  font-weight: 900;
  background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  animation: ${glitch} 3s ease-in-out infinite;
  
  &::before {
    content: '404';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.dark} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${glitch} 3s ease-in-out infinite reverse;
    opacity: 0.3;
  }
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  color: ${theme.colors.accent};
  margin-bottom: 2rem;
  animation: ${float} 3s ease-in-out infinite;
  
  svg {
    filter: drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3));
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.secondary});
    border-radius: 2px;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.text};
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  opacity: 0.8;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

const ActionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.secondary} 100%);
  color: ${theme.colors.light};
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${theme.colors.secondary} 0%, ${theme.colors.accent} 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 25px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    background: rgba(248, 250, 252, 0.2);
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
    border-color: rgba(248, 250, 252, 0.3);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      width: 120px;
      height: 120px;
    }
  }
  
  svg {
    margin-right: 0.75rem;
    font-size: 1.2rem;
    position: relative;
    z-index: 1;
  }
  
  span {
    position: relative;
    z-index: 1;
  }
`;

const SecondaryButton = styled(ActionButton)`
  background: transparent;
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.accent};
  box-shadow: none;
  
  &::before {
    background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.secondary} 100%);
  }
  
  &:hover {
    color: ${theme.colors.light};
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  }
`;

const HelpSection = styled.div`
  background: rgba(59, 130, 246, 0.05);
  border-radius: 20px;
  padding: 2.5rem;
  margin-top: 3rem;
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(59, 130, 246, 0.1), 
      transparent
    );
    transition: left 3s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const HelpTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: 0.75rem;
    color: ${theme.colors.accent};
    animation: ${bounce} 2s ease-in-out infinite;
  }
`;

const HelpText = styled.p`
  color: ${theme.colors.text};
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.8;
`;

const FloatingElement = styled.div`
  position: absolute;
  color: ${theme.colors.accent};
  opacity: 0.1;
  font-size: ${props => props.size || '2rem'};
  animation: ${float} ${props => props.duration || '4s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  
  &:nth-child(1) { top: 15%; left: 10%; }
  &:nth-child(2) { top: 25%; right: 15%; }
  &:nth-child(3) { bottom: 30%; left: 20%; }
  &:nth-child(4) { bottom: 15%; right: 25%; }
`;

export const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <FloatingElement size="3rem" duration="5s" delay="0s">
        <FaRocket />
      </FloatingElement>
      <FloatingElement size="2.5rem" duration="6s" delay="1s">
        <FaSearch />
      </FloatingElement>
      <FloatingElement size="2rem" duration="4s" delay="2s">
        <FaHome />
      </FloatingElement>
      <FloatingElement size="2.8rem" duration="7s" delay="0.5s">
        <FaExclamationTriangle />
      </FloatingElement>
      
      <Container>
        <ContentWrapper>
          <ErrorIcon>
            <FaExclamationTriangle />
          </ErrorIcon>
          
          <ErrorCode>404</ErrorCode>
          
          <Title>Oops! Page Not Found</Title>
          
          <Description>
            The page you're looking for seems to have taken a detour into the digital void. 
            Don't worry, even the best explorers sometimes take a wrong turn!
          </Description>
          
          <ButtonGroup>
            <ActionButton to="/">
              <FaHome />
              <span>Return Home</span>
            </ActionButton>
            
            <SecondaryButton to="/courses">
              <FaSearch />
              <span>Browse Courses</span>
            </SecondaryButton>
          </ButtonGroup>
          
          <HelpSection>
            <HelpTitle>
              <FaRocket />
              Need Help Finding Something?
            </HelpTitle>
            <HelpText>
              Our comprehensive courses and expert guidance are just a click away. 
              Let's get you back on track to achieving your tech goals!
            </HelpText>
          </HelpSection>
        </ContentWrapper>
      </Container>
    </NotFoundWrapper>
  );
};