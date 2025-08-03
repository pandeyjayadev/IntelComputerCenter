import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../Container';
import { Link } from 'react-router-dom';
import { FaPlay, FaRocket, FaGraduationCap, FaLaptopCode, FaBrain, FaCertificate } from 'react-icons/fa';
import heroBackground from '../assets/hero-background.jpeg';

// Theme colors
const theme = {
  colors: {
    primary: '#031469',
    secondary: '#1e40af',
    accent: '#3b82f6',
    light: '#f8fafc',
    dark: '#051b3d',
    text: '#e2e8f0',
  }
};

// Simplified animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HeroWrapper = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: 
    linear-gradient(135deg, 
      rgba(3, 20, 105, 0.58) 0%, 
      rgba(5, 27, 61, 0.81) 100%
    ),
    url(${heroBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 200px 1rem 120px;
  
  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 100px 0.75rem 140px;
    align-items: flex-start;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    min-height: 100vh;
    padding: 120px 0.5rem 160px;
    align-items: flex-start;
    justify-content: center;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: ${theme.colors.light};
  max-width: 700px;
  padding: 1rem;
  animation: ${fadeIn} 1s ease-out;
  width: 100%;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0.75rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
    margin-bottom: 1.25rem;
  }
  
  svg {
    margin-right: 0.5rem;
    color: ${theme.colors.accent};
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  
  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 7vw, 3rem);
    margin-bottom: 1.25rem;
  }
  
  .highlight {
    color: ${theme.colors.accent};
    text-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 580px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 100%;
  }
`;

const StatsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
    justify-content: center;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  .number {
    font-size: 2rem;
    font-weight: 800;
    color: ${theme.colors.accent};
    display: block;
    line-height: 1;
    text-shadow: 0 2px 4px rgba(59, 130, 246, 0.4);
  }
  
  .label {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: 0.25rem;
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 2.5rem;
    justify-content: center;
  }
`;

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2.5rem;
  color: ${theme.colors.light};
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }
  
  svg {
    margin-right: 0.75rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.secondary} 100%);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  border: 2px solid ${theme.colors.accent};
  
  &:hover {
    background: rgba(59, 130, 246, 0.1);
  }
`;

const FeatureHighlights = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  background: rgba(59, 130, 246, 0.1);
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: rgba(59, 130, 246, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(59, 130, 246, 0.2);
  }
  
  svg {
    margin-right: 0.5rem;
    color: ${theme.colors.accent};
  }
`;

export const Hero = () => {
  return (
    <HeroWrapper id="home">
      <Container>
        <HeroContent>
          {/* <Badge>
            <FaRocket />
            <span>Premium Tech Education</span>
          </Badge>
           */}
          <Title>
            Master <span className="highlight">Technology</span><br />
            Transform Your Future
          </Title>
          
          <Subtitle>
            Join our comprehensive computer education programs and courses designed to equip you with in-demand skills for the digital age.
          </Subtitle>
          
          <StatsWrapper>
            <StatItem>
              <span className="number">1,800+</span>
              <span className="label">Students</span>
            </StatItem>
            <StatItem>
              <span className="number">7+</span>
              <span className="label">Courses</span>
            </StatItem>
            <StatItem>
              <span className="number">5+</span>
              <span className="label">Qualified Instructors</span>
            </StatItem>
          </StatsWrapper>
          
          <CTAWrapper>
            <PrimaryButton to="/courses">
              <FaGraduationCap />
              <span>Explore Courses</span>
            </PrimaryButton>
            
            <SecondaryButton to="/enroll">
              <FaPlay />
              <span>Get Started</span>
            </SecondaryButton>
          </CTAWrapper>
          
          <FeatureHighlights>
            <FeatureItem>
              <FaLaptopCode />
              <span>Hands-on Learning</span>
            </FeatureItem>
            <FeatureItem>
              <FaBrain />
              <span>Expert Instructors</span>
            </FeatureItem>
          </FeatureHighlights>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
};