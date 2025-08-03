
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../components/Container';
import { FaUsers, FaLightbulb, FaChartLine, FaHandsHelping } from 'react-icons/fa';
import { BiBookAlt, BiMedal, BiGlobe } from 'react-icons/bi';

// Reuse the same animations from contact page
const fadeInUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(40px) scale(0.95); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
  }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(1deg); }
  50% { transform: translateY(-5px) rotate(0deg); }
  75% { transform: translateY(-8px) rotate(-1deg); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Reuse the same wrapper styles with slight modifications
const AboutWrapper = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f23 100%);
  background-size: 400% 400%;
  animation: ${gradientShift} 20s ease infinite;
  position: relative;
  overflow: hidden;
  min-height: 100vh;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &::before {
    background: 
      radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255, 119, 198, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(120, 219, 255, 0.05) 0%, transparent 50%);
  }

  &::after {
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237877c6' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    animation: ${floatAnimation} 20s ease-in-out infinite;
  }
`;

// Reuse FloatingElements component as is
const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;

  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    animation: ${floatAnimation} 15s ease-in-out infinite;
  }

  &::before {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(120, 119, 198, 0.1) 0%, transparent 70%);
    top: 10%;
    right: 10%;
  }

  &::after {
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 119, 198, 0.1) 0%, transparent 70%);
    bottom: 20%;
    left: 15%;
    animation-direction: reverse;
    filter: blur(30px);
  }
`;

// Reuse SectionHeader components
const SectionHeader = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto 5rem;
  position: relative;
  z-index: 2;
  animation: ${fadeInUp} 1s ease forwards;
`;

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  position: relative;
  background: linear-gradient(135deg, #fff 0%, #7877c6 50%, #ff77c6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(120, 119, 198, 0.3);

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #7877c6, #ff77c6);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.4rem;
  color: #e6e6e6;
  line-height: 1.8;
  max-width: 700px;
  margin: 2rem auto 0;
  opacity: 0.9;
`;

// New components for About page
const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const MissionStatement = styled.div`
  animation: ${fadeInUp} 1s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
`;

const MissionCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(120, 119, 198, 0.6), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(120, 119, 198, 0.3);
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(120, 119, 198, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  &:hover::before {
    left: 100%;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  animation: ${fadeInUp} 1s ease forwards;
  animation-delay: 0.5s;
  opacity: 0;
`;

const ValueCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-5px);
  }
`;

const ValueIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7877c6 0%, #ff77c6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin: 0 auto 1rem;
`;

const ValueTitle = styled.h4`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const ValueDescription = styled.p`
  font-size: 0.9rem;
  color: #e6e6e6;
  opacity: 0.8;
`;

export const AboutPage = () => {
  const values = [
    {
      icon: <BiMedal />,
      title: "Excellence",
      description: "We strive for the highest standards in education and student outcomes"
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "Building strong connections between students, staff, and industry"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Embracing new technologies and teaching methodologies"
    },
    {
      icon: <BiGlobe />,
      title: "Accessibility",
      description: "Making quality education available to everyone in our region"
    }
  ];

  return (
    <AboutWrapper id="about">
      <FloatingElements />
      <Container>
        <SectionHeader>
          <SectionTitle>About Our Institute</SectionTitle>
          <SectionSubtitle>
            Pioneering computer education in Bardiya since 2010, we've empowered thousands
            of students with practical, career-focused technology skills.
          </SectionSubtitle>
        </SectionHeader>

        <AboutContent>
          <MissionStatement>
            <MissionCard>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>
                Our Mission
              </h3>
              <p style={{ color: '#e6e6e6', lineHeight: '1.8', opacity: 0.9 }}>
                To provide accessible, high-quality computer education that equips students
                with the technical skills and professional competencies needed to thrive in
                Nepal's growing digital economy. We bridge the gap between academic knowledge
                and real-world application through hands-on training and industry partnerships.
              </p>
            </MissionCard>

            <MissionCard>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>
                Our History
              </h3>
              <p style={{ color: '#e6e6e6', lineHeight: '1.8', opacity: 0.9 }}>
                Founded in 2010 with just 12 students, Intel Computer Institute has grown to
                become Bardiya's premier computer training center. Our alumni network now spans
                across Nepal and internationally, with graduates working in software development,
                IT services, digital marketing, and more.
              </p>
            </MissionCard>
          </MissionStatement>

          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard key={index}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </AboutContent>
      </Container>
    </AboutWrapper>
  );
};