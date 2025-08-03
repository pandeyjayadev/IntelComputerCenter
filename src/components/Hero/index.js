import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../Container';
import { Link } from 'react-router-dom';
import { FaPlay, FaRocket, FaGraduationCap, FaArrowDown, FaLaptopCode, FaBrain, FaCertificate } from 'react-icons/fa';
import heroBackground from '../assets/hero-background.jpeg';

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
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
  40% { transform: translateY(-15px) translateX(-50%); }
  60% { transform: translateY(-8px) translateX(-50%); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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
      rgba(3, 20, 105, 0.9) 0%, 
      rgba(5, 27, 61, 0.9) 25%, 
      rgba(30, 64, 175, 0.9) 50%, 
      rgba(3, 20, 105, 0.9) 75%, 
      rgba(5, 27, 61, 0.9) 100%
    ),
    url(${heroBackground});
  background-size: 400% 400%, cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${shimmer} 30s ease-in-out infinite;
  padding: 80px 1rem 120px;
  
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
  
  @media (max-height: 700px) {
    padding: 80px 1rem 80px;
  }
  
  @media (max-height: 600px) and (max-width: 480px) {
    padding: 60px 0.5rem 60px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${heroBackground});
  background-size: cover;
  background-position: center;
  z-index: 0;
  opacity: 0.5;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background-image: 
    radial-gradient(circle at 20% 50%, ${theme.colors.accent} 2px, transparent 2px),
    radial-gradient(circle at 80% 20%, ${theme.colors.accent} 1px, transparent 1px),
    radial-gradient(circle at 40% 80%, ${theme.colors.accent} 2px, transparent 2px);
  background-size: 100px 100px, 150px 150px, 120px 120px;
  background-position: 0 0, 50px 50px, 25px 75px;
  animation: ${float} 8s ease-in-out infinite;
  z-index: 1;
  
  @media (max-width: 768px) {
    opacity: 0.05;
    background-size: 60px 60px, 90px 90px, 75px 75px;
  }
`;

const FloatingIcon = styled.div`
  position: absolute;
  color: ${theme.colors.accent};
  opacity: 0.15;
  font-size: ${props => props.size || '2rem'};
  animation: ${float} ${props => props.duration || '6s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  z-index: 1;
  
  &:nth-child(1) { top: 15%; left: 10%; }
  &:nth-child(2) { top: 20%; right: 15%; }
  &:nth-child(3) { bottom: 25%; left: 20%; }
  &:nth-child(4) { bottom: 30%; right: 25%; }
  &:nth-child(5) { top: 60%; left: 5%; }
  &:nth-child(6) { top: 70%; right: 10%; }
  
  @media (max-width: 768px) {
    opacity: 0.08;
    font-size: ${props => {
      const baseSize = parseFloat(props.size || '2');
      return `${baseSize * 0.7}rem`;
    }};
    
    &:nth-child(3), &:nth-child(4), &:nth-child(5), &:nth-child(6) {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    opacity: 0.05;
    font-size: ${props => {
      const baseSize = parseFloat(props.size || '2');
      return `${baseSize * 0.5}rem`;
    }};
    
    &:nth-child(2) {
      display: none;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: ${theme.colors.light};
  max-width: 700px;
  padding: 1rem;
  animation: ${fadeInUp} 1.2s ease-out;
  width: 100%;
  
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
  animation: ${fadeInLeft} 1s ease-out 0.2s both;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
    margin-bottom: 1.25rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.35rem 0.9rem;
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }
  
  svg {
    margin-right: 0.5rem;
    color: ${theme.colors.accent};
    animation: ${pulse} 2s ease-in-out infinite;
    
    @media (max-width: 480px) {
      margin-right: 0.4rem;
      font-size: 0.9rem;
    }
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
  
  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 7vw, 3rem);
    margin-bottom: 1.25rem;
    line-height: 1.2;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 6vw, 2.2rem);
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  .highlight {
    background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.light} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, ${theme.colors.accent}, transparent);
      border-radius: 2px;
      animation: ${shimmer} 3s ease-in-out infinite;
      
      @media (max-width: 480px) {
        height: 2px;
        bottom: -2px;
      }
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  animation: ${fadeInUp} 1s ease-out 0.4s both;
  max-width: 580px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
`;

const StatsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
  animation: ${fadeInUp} 1s ease-out 0.5s both;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 1.5rem;
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
    
    @media (max-width: 768px) {
      font-size: 1.7rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  }
  
  .label {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: 0.25rem;
    
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  animation: ${fadeInUp} 1s ease-out 0.6s both;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 2.5rem;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.secondary} 100%);
  color: ${theme.colors.light};
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1.8rem;
    font-size: 0.95rem;
    width: 100%;
    max-width: 280px;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${theme.colors.secondary} 0%, ${theme.colors.accent} 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 30px;
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
    box-shadow: 0 15px 35px rgba(59, 130, 246, 0.5);
    
    @media (max-width: 768px) {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
    }
    
    @media (max-width: 480px) {
      transform: translateY(-1px) scale(1.01);
      box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
    }
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      width: 150px;
      height: 150px;
    }
  }
  
  svg {
    margin-right: 0.75rem;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
    
    @media (max-width: 480px) {
      margin-right: 0.6rem;
      font-size: 0.9rem;
    }
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
  
  span {
    position: relative;
    z-index: 1;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 2px solid ${theme.colors.accent};
  box-shadow: none;
  
  &::before {
    background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.secondary} 100%);
  }
  
  &:hover {
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
    
    @media (max-width: 768px) {
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.25);
    }
    
    @media (max-width: 480px) {
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
    }
  }
`;

const FeatureHighlights = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  animation: ${fadeInUp} 1s ease-out 0.7s both;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
    flex-direction: column;
    align-items: center;
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
  
  @media (max-width: 768px) {
    padding: 0.65rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
  
  &:hover {
    background: rgba(59, 130, 246, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.2);
    
    @media (max-width: 480px) {
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
    }
  }
  
  svg {
    margin-right: 0.5rem;
    color: ${theme.colors.accent};
    font-size: 1.1rem;
    
    @media (max-width: 480px) {
      margin-right: 0.4rem;
      font-size: 1rem;
    }
  }
  
  span {
    font-size: 0.9rem;
    font-weight: 500;
    
    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: ${bounce} 2s infinite;
  
  @media (max-width: 768px) {
    bottom: 60px;
  }
  
  @media (max-width: 480px) {
    bottom: 80px;
  }
  
  @media (max-height: 700px) {
    bottom: 30px;
  }
  
  @media (max-height: 600px) and (max-width: 480px) {
    bottom: 20px;
  }
`;

const ScrollButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${theme.colors.light};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    color: ${theme.colors.accent};
    
    @media (max-width: 480px) {
      transform: translateY(-2px);
    }
  }
  
  .text {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    opacity: 0.8;
    
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.75rem;
      margin-bottom: 0.4rem;
    }
  }
`;

const ScrollArrow = styled.div`
  width: 24px;
  height: 24px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
  animation: ${bounce} 2s infinite;
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    border-width: 1.5px;
  }
`;

export const Hero = () => {
  return (
    <HeroWrapper id="home">
      <BackgroundImage />
      <BackgroundPattern />
      
      <FloatingIcon size="3rem" duration="8s" delay="0s">
        <FaLaptopCode />
      </FloatingIcon>
      <FloatingIcon size="2.5rem" duration="6s" delay="1s">
        <FaBrain />
      </FloatingIcon>
      <FloatingIcon size="2rem" duration="7s" delay="2s">
        <FaCertificate />
      </FloatingIcon>
      <FloatingIcon size="2.8rem" duration="5s" delay="0.5s">
        <FaGraduationCap />
      </FloatingIcon>
      <FloatingIcon size="2.2rem" duration="9s" delay="1.5s">
        <FaRocket />
      </FloatingIcon>
      <FloatingIcon size="2.6rem" duration="6.5s" delay="0.8s">
        <FaPlay />
      </FloatingIcon>
      
      <Container>
        <HeroContent>
          <Badge>
            <FaRocket />
            <span>Premium Tech Education</span>
          </Badge>
          
          <Title>
            Master <span className="highlight">Technology</span><br />
            Transform Your Future
          </Title>
          
          <Subtitle>
            Join our comprehensive computer education programs and courses designed to equip you with in-demand skills for the digital age.
          </Subtitle>
          
          <StatsWrapper>
            <StatItem>
              <span className="number">10,000+</span>
              <span className="label">Students</span>
            </StatItem>
            <StatItem>
              <span className="number">50+</span>
              <span className="label">Courses</span>
            </StatItem>
            <StatItem>
              <span className="number">98%</span>
              <span className="label">Success Rate</span>
            </StatItem>
          </StatsWrapper>
          
          <CTAWrapper>
            <PrimaryButton to="/courses">
              <FaGraduationCap />
              <span>Explore Courses</span>
            </PrimaryButton>
            
            <SecondaryButton to="/contact">
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
              <FaCertificate />
              <span>Industry Certification</span>
            </FeatureItem>
            <FeatureItem>
              <FaBrain />
              <span>Expert Instructors</span>
            </FeatureItem>
          </FeatureHighlights>
        </HeroContent>
      </Container>
      
      <ScrollIndicator>
        <ScrollButton href="#about">
          <span className="text">Scroll Down</span>
          <ScrollArrow />
        </ScrollButton>
      </ScrollIndicator>
    </HeroWrapper>
  );
};