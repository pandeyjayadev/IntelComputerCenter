import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../components/Container';
import { FaCheckCircle, FaChalkboardTeacher, FaLaptop, FaClock, FaHandsHelping, FaAward, FaUsers } from 'react-icons/fa';
import { IoIosRibbon } from 'react-icons/io';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientBG = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const AboutWrapper = styled.section`
  padding: 8rem 0;
  background: linear-gradient(-45deg, #f9fafb, #f0f4f8, #f9fafb);
  background-size: 400% 400%;
  animation: ${gradientBG} 15s ease infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234facfe' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  position: relative;
  animation: ${fadeIn} 0.8s ease forwards;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #111827;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.3rem;
  color: #4b5563;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    font-size: 1.1rem;
    line-height: 1.9;
    color: #4b5563;
    margin-bottom: 1.8rem;
    animation: ${fadeIn} 0.8s ease forwards;
    animation-delay: 0.2s;
    opacity: 0;
  }

  blockquote {
    font-size: 1.3rem;
    font-style: italic;
    color: #111827;
    border-left: 4px solid #4facfe;
    padding: 1.5rem;
    margin: 2.5rem 0;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 0 8px 8px 0;
    position: relative;
    animation: ${fadeIn} 0.8s ease forwards;
    animation-delay: 0.4s;
    opacity: 0;

    &::before {
      content: '"';
      position: absolute;
      top: 0;
      left: 10px;
      font-size: 5rem;
      color: rgba(79, 172, 254, 0.1);
      font-family: serif;
      line-height: 1;
      z-index: -1;
    }
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.8rem;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: ${({ delay }) => delay || '0.2s'};
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(79, 172, 254, 0.2);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  flex-shrink: 0;
`;

const FeatureContent = styled.div`
  h3 {
    font-size: 1.3rem;
    color: #111827;
    margin-bottom: 0.8rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: #6b7280;
    line-height: 1.7;
    margin-bottom: 0;
  }
`;

const WhyChooseUs = styled.div`
  margin-top: 5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.6s;
  opacity: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  }
`;

const WhyChooseUsTitle = styled.h3`
  font-size: 1.8rem;
  color: #111827;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
    border-radius: 3px;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.8rem;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.6);
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: ${({ delay }) => delay || '0.3s'};
  opacity: 0;

  &:hover {
    background: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  svg {
    color: white;
    font-size: 1.2rem;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  span {
    font-size: 1.05rem;
    color: #4b5563;
    font-weight: 500;
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: ${({ delay }) => delay || '0.3s'};
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;
`;

export const AboutPage = () => {
  return (
    <AboutWrapper id="about">
      <Container>
        <SectionHeader>
          <SectionTitle>About Our Institute</SectionTitle>
          <SectionSubtitle>
            Empowering the community with practical digital education since 2010
          </SectionSubtitle>
        </SectionHeader>

        <AboutContent>
          <AboutText>
            <p>
              <strong>Intel Computer Institute</strong> is a premier computer training center in Gulariya, Bardiya, dedicated to bridging the digital divide through affordable, practical education. Our mission is to equip students of all ages with essential 21st century skills.
            </p>

            <blockquote>
              "We believe everyone deserves access to quality computer education, regardless of their background or experience level."
            </blockquote>

            <p>
              From absolute beginners to career-focused professionals, our tailored programs combine hands-on training with real-world applications. Our air-conditioned lab features modern workstations and high-speed internet, creating the perfect learning environment.
            </p>
          </AboutText>

          <FeaturesGrid>
            <FeatureCard delay="0.2s">
              <FeatureIcon>
                <FaLaptop />
              </FeatureIcon>
              <FeatureContent>
                <h3>Comprehensive Courses</h3>
                <p>
                  From basic computing to advanced office applications, Nepali/English typing, and specialized student packages - we cover all essential digital skills.
                </p>
              </FeatureContent>
            </FeatureCard>

            <FeatureCard delay="0.4s">
              <FeatureIcon>
                <FaChalkboardTeacher />
              </FeatureIcon>
              <FeatureContent>
                <h3>Expert Instruction</h3>
                <p>
                  Our certified instructors provide personalized attention with patience and expertise, ensuring every student masters the material.
                </p>
              </FeatureContent>
            </FeatureCard>

            <FeatureCard delay="0.6s">
              <FeatureIcon>
                <IoIosRibbon />
              </FeatureIcon>
              <FeatureContent>
                <h3>Certified Training</h3>
                <p>
                  Receive government-recognized certificates upon completion, validating your skills for academic and professional advancement.
                </p>
              </FeatureContent>
            </FeatureCard>
          </FeaturesGrid>
        </AboutContent>

        <WhyChooseUs>
          <WhyChooseUsTitle>Why Students Choose Us</WhyChooseUsTitle>
          <BenefitsGrid>
            <BenefitItem delay="0.2s">
              <FaCheckCircle />
              <span>Affordable fees with installment options</span>
            </BenefitItem>
            <BenefitItem delay="0.3s">
              <FaClock />
              <span>Flexible morning/evening batches</span>
            </BenefitItem>
            <BenefitItem delay="0.4s">
              <FaHandsHelping />
              <span>Job placement assistance</span>
            </BenefitItem>
            <BenefitItem delay="0.5s">
              <FaLaptop />
              <span>Modern, well-equipped computer lab</span>
            </BenefitItem>
            <BenefitItem delay="0.6s">
              <FaChalkboardTeacher />
              <span>Experienced, friendly instructors</span>
            </BenefitItem>
            <BenefitItem delay="0.7s">
              <FaAward />
              <span>Government recognized certificates</span>
            </BenefitItem>
            <BenefitItem delay="0.8s">
              <FaUsers />
              <span>Small batch sizes for individual attention</span>
            </BenefitItem>
            <BenefitItem delay="0.9s">
              <FaCheckCircle />
              <span>Practical, real-world focused curriculum</span>
            </BenefitItem>
          </BenefitsGrid>
        </WhyChooseUs>

        <StatsSection>
          <StatCard delay="0.2s">
            <StatNumber>3,000+</StatNumber>
            <StatLabel>Students Trained</StatLabel>
          </StatCard>
          <StatCard delay="0.4s">
            <StatNumber>7+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatCard>
          <StatCard delay="0.6s">
            <StatNumber>98%</StatNumber>
            <StatLabel>Satisfaction Rate</StatLabel>
          </StatCard>
          <StatCard delay="0.8s">
            <StatNumber>10+</StatNumber>
            <StatLabel>Courses Offered</StatLabel>
          </StatCard>
        </StatsSection>
      </Container>
    </AboutWrapper>
  );
};