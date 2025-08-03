import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../Container';
import { FiClock, FiCalendar, FiUsers, FiStar, FiArrowRight, FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

// Modern color palette
const theme = {
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    success: '#10b981',
    warning: '#f59e0b',
    light: '#f8fafc',
    dark: '#0f172a',
    text: '#475569',
    white: '#ffffff',
    gradient: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      dark: 'linear-gradient(135deg, #434343 0%, #000000 100%)'
    }
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

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
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

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.2); }
  50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.4); }
`;

const FeaturedWrapper = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, rgba(6, 182, 212, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
`;

const SectionBadge = styled.div`
  display: inline-flex;
  align-items: center;
  background: ${theme.colors.gradient.primary};
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  animation: ${fadeInUp} 1s ease-out;
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
  
  @media (max-width: 480px) {
    padding: 0.4rem 1.2rem;
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
  
  svg {
    margin-right: 0.5rem;
    animation: ${float} 2s ease-in-out infinite;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: ${theme.colors.gradient.dark};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
  line-height: 1.2;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.text};
  max-width: 600px;
  margin: 0 auto 2.5rem;
  animation: ${fadeInUp} 1s ease-out 0.4s both;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const CourseCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  animation: ${fadeInUp} 0.8s ease-out ${props => props.index * 0.2}s both;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    
    @media (max-width: 480px) {
      transform: translateY(-8px) scale(1.01);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.gradient};
    z-index: 1;
  }
`;

const CourseImage = styled.div`
  height: 200px;
  background: ${props => props.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.1) 100%);
  }

  @media (max-width: 768px) {
    height: 180px;
  }
  
  @media (max-width: 480px) {
    height: 160px;
  }
`;

const CourseIcon = styled.div`
  font-size: 4rem;
  position: relative;
  z-index: 2;
  animation: ${float} 3s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const CourseContent = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const CourseTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${theme.colors.dark};
  margin-bottom: 0.75rem;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 0.6rem;
  }
`;

const CourseDescription = styled.p`
  color: ${theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    -webkit-line-clamp: 4;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    text-align: center;
    -webkit-line-clamp: 5;
    margin-bottom: 1.25rem;
  }
`;

const CourseMeta = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(99, 102, 241, 0.08);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${theme.colors.text};
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(99, 102, 241, 0.15);
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    justify-content: center;
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
  }
  
  svg {
    color: ${theme.colors.primary};
    flex-shrink: 0;
  }
`;

const CourseFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(99, 102, 241, 0.1);
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const CoursePrice = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  background: ${theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const EnrollButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${theme.colors.gradient.primary};
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
    
    svg {
      transform: translateX(3px);
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 2rem;
    font-size: 0.85rem;
    width: 100%;
    justify-content: center;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
`;

const ViewAllButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: ${theme.colors.gradient.accent};
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
  animation: ${glow} 3s ease-in-out infinite;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 20px 40px rgba(6, 182, 212, 0.4);
    
    &::before {
      left: 100%;
    }
    
    svg {
      transform: translateX(5px);
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1.8rem;
    font-size: 0.95rem;
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  span {
    position: relative;
    z-index: 1;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  animation: ${fadeInUp} 1s ease-out 0.8s both;
  
  @media (max-width: 480px) {
    margin-top: 2rem;
  }
`;

const featuredCourses = [
  {
    id: 1,
    title: "Basic Computer Course",
    description: "Master computer fundamentals including MS Office, file management, typing, internet basics, email, and essential digital skills for the modern workplace.",
    duration: "3 Months",
    schedule: "Morning/Evening",
    price: "NPR 3,500",
    image: "intelcomputercenter/src/assets/WhatsApp Image 2025-08-02 at 9.29.57 PM.jpeg",
    gradient: theme.colors.gradient.primary,
    level: "Beginner"
  },
  {
    id: 2,
    title: "Computer Repairing",
    description: "Learn hardware fundamentals, component assembly, Windows installation, and essential troubleshooting techniques for computer maintenance.",
    duration: "1.5 Months",
    schedule: "Weekends",
    price: "NPR 2,500",
    icon: "🔧",
    gradient: theme.colors.gradient.secondary,
    level: "Intermediate"
  },
  {
    id: 3,
    title: "Graphics Design (Basic)",
    description: "Create stunning visuals with Adobe Photoshop and Canva. Learn photo editing, design principles, and professional graphics creation.",
    duration: "2 Months",
    schedule: "Flexible",
    price: "NPR 6,000",
    icon: "🎨",
    gradient: theme.colors.gradient.accent,
    level: "Creative"
  },
];

export const FeaturedCourses = () => {
  return (
    <FeaturedWrapper id="featured-courses">
      <Container>
        <SectionHeader>
          <SectionBadge>
            <FiStar />
            Featured Courses
          </SectionBadge>
          <SectionTitle>Transform Your Skills</SectionTitle>
          <SectionSubtitle>
            Discover our most popular courses designed to accelerate your career.
          </SectionSubtitle>
        </SectionHeader>
        
        <CoursesGrid>
          {featuredCourses.map((course, index) => (
            <CourseCard key={course.id} index={index} gradient={course.gradient}>
              <CourseImage gradient={course.gradient}>
                <CourseIcon>{course.icon}</CourseIcon>
              </CourseImage>
              <CourseContent>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseDescription>{course.description}</CourseDescription>
                <CourseMeta>
                  <MetaItem>
                    <FiClock size={16} />
                    {course.duration}
                  </MetaItem>
                  <MetaItem>
                    <FiCalendar size={16} />
                    {course.schedule}
                  </MetaItem>
                </CourseMeta>
                <CourseFooter>
                  <CoursePrice>{course.price}</CoursePrice>
                  <EnrollButton as={Link} to="/courses">
                    <span>Enroll Now</span>
                    <FiArrowRight size={16} />
                  </EnrollButton>
                </CourseFooter>
              </CourseContent>
            </CourseCard>
          ))}
        </CoursesGrid>
        
        <ButtonContainer>
          <ViewAllButton as={Link} to="/courses">
            <span>View All Courses</span>
            <FiPlay size={18} />
          </ViewAllButton>
        </ButtonContainer>
      </Container>
    </FeaturedWrapper>
  );
};