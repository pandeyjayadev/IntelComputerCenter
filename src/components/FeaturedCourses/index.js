import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../Container';
import { FiClock, FiCalendar, FiStar, } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

// Import local course images
import BasicComputerBg from '../assets/basic computer.jpeg';
import RepairingBg from '../assets/course/repair.jpg';
import GraphicsDesignBg from '../assets/course/graphic.jpg';


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

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const FeaturedWrapper = styled.section`
  padding: 8rem 0;
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
    padding: 6rem 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
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
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    
    .course-image img {
      transform: scale(1.05);
    }
  }
`;

const CourseImage = styled.div`
  height: 220px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
  }
`;

const CourseLevel = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.gradient};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
`;

const CourseContent = styled.div`
  padding: 2rem;
`;

const CourseTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${theme.colors.dark};
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

const CourseDescription = styled.p`
  color: ${theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CourseMeta = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
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
  
  svg {
    color: ${theme.colors.primary};
  }
`;

const CourseFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(99, 102, 241, 0.1);
`;

const CoursePrice = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  background: ${theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  animation: ${fadeInUp} 1s ease-out 0.8s both;
`;

const featuredCourses = [
  {
    id: 1,
    title: "Basic Computer Course",
    description: "Fundamentals of computer, Multimedia, Disk Management, MS Word, MS Excel, MS PowerPoint, File management, Typing (Nepali & English), Internet, Email, Printing, Scanning.",
    duration: "3 Months",
    schedule: "Morning/Evening",
    price: "NPR 3,000",
    image: BasicComputerBg,
    gradient: theme.colors.gradient.primary
  },
  {
    id: 2,
    title: "Computer Repairing",
    description: "Introduction to computer parts, assembling/disassembling, formatting, installing Windows, basic troubleshooting.",
    duration: "1.5 Months",
    schedule: "Weekends",
    price: "NPR 2,500",
    image: RepairingBg,
    gradient: theme.colors.gradient.secondary
  },
  {
    id: 3,
    title: "Graphics Design (Basic)",
    description: "Adobe Photoshop (basic), Canva, Photo editing, ID/Passport photo making.",
    duration: "2 Months",
    schedule: "Flexible",
    price: "NPR 6,000",
    image: GraphicsDesignBg,
    gradient: theme.colors.gradient.accent
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
            <CourseCard key={course.id} index={index}>
              <CourseImage className="course-image">
                <img src={course.image} alt={course.title} />
                <CourseLevel gradient={course.gradient}>{course.level}</CourseLevel>
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
                  <Button as={Link} to={`/enroll/${course.id}`}>
                    Enroll Now 
                  </Button>
                </CourseFooter>
              </CourseContent>
            </CourseCard>
          ))}
        </CoursesGrid>
        
        <ButtonContainer>
          <Button primary as={Link} to="/courses">
            View All Courses
          </Button>
        </ButtonContainer>
      </Container>
    </FeaturedWrapper>
  );
};