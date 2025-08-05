import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../components/Container';
import { FiSearch, FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Import local images for course backgrounds
import BasicComputerBg from '../components/assets/basic computer.jpeg';
import RepairingBg from '../components/assets/course/repair.jpg';
import GraphicsDesignBg from '../components/assets/course/graphic.jpg';
import TypingBg from '../components/assets/colored-keys.jpg';
import InternetBg from '../components/assets/course/iot-7850194_1280.jpg';
import OfficePackageBg from '../components/assets/course/office.webp';
import StudentPackageBg from '../components/assets/IMG_1782.jpg';

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

const CoursesWrapper = styled.section`
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
    padding: 7rem 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: ${theme.colors.gradient.dark};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  animation: ${fadeInUp} 1s ease-out;
  line-height: 1.2;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.text};
  max-width: 600px;
  margin: 0 auto 2.5rem;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto 3rem;
  position: relative;
  animation: ${fadeInUp} 1s ease-out 0.4s both;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem 1rem 3.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  background: ${theme.colors.white};
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  color: ${theme.colors.dark};

  &:focus {
    outline: none;
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.3);
  }
  
  &::placeholder {
    color: ${theme.colors.text}80;
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.primary};
  z-index: 2;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
`;

const CourseCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  animation: ${fadeInUp} 0.8s ease-out ${props => props.index * 0.1}s both;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    
    .course-image::after {
      opacity: 0.7;
    }
  }
`;

const CourseImage = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;
  background: ${props => props.gradient || theme.colors.gradient.primary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.gradient || theme.colors.gradient.primary};
    opacity: 0.5;
    transition: opacity 0.3s ease;
    mix-blend-mode: multiply;
  }
`;

const CourseContent = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(99, 102, 241, 0.15);
    transform: translateY(-2px);
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
`;

const CoursePrice = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  background: ${theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const EnrollButton = styled(Link)`
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
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
    
    svg {
      transform: translateX(3px);
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
`;

const NoResults = styled.div`
  text-align: center;
  grid-column: 1 / -1;
  padding: 3rem;
  color: ${theme.colors.text};
  animation: ${fadeInUp} 0.8s ease-out;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${theme.colors.dark};
  }

  p {
    font-size: 1.1rem;
    opacity: 0.8;
  }
`;

const coursesData = [
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
  {
    id: 4,
    title: "Typing Course",
    description: "Nepali Typing (Preeti, Unicode), English Typing, Speed & accuracy improvement.",
    duration: "1 Month",
    schedule: "Morning/Evening",
    price: "NPR 2,000",
    image: TypingBg,
    gradient: theme.colors.gradient.primary
  },
  {
    id: 5,
    title: "Internet & Digital Skills",
    description: "Using browsers, emails, Google tools (Drive, Docs), online forms, social media basics, safety & privacy.",
    duration: "1 Month",
    schedule: "Flexible",
    price: "NPR 1,500",
    image: InternetBg,
    gradient: theme.colors.gradient.secondary
  },
  {
    id: 6,
    title: "Office Package Course",
    description: "Ms Word, Ms Excel, Ms PowerPoint, Ms OneNote & more",
    duration: "2 Months",
    schedule: "Flexible",
    price: "NPR 4,000",
    image: OfficePackageBg,
    gradient: theme.colors.gradient.accent
  },
  {
    id: 7,
    title: "SEE & +2 Student Package",
    description: "Tailored for school students: Basic computer, Internet, Typing, project preparation, printing",
    duration: "3 Months",
    schedule: "After school",
    price: "NPR 3,000",
    image: StudentPackageBg,
    gradient: theme.colors.gradient.primary
  }
];

export const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CoursesWrapper id="courses">
      <Container>
        <SectionHeader>
          <SectionTitle>Our Computer Courses</SectionTitle>
          <SectionSubtitle>
            Comprehensive, practical training designed to equip you with in-demand digital skills
            for today's technology-driven world.
          </SectionSubtitle>
        </SectionHeader>
        
        <SearchContainer>
          <SearchIcon size={20} />
          <SearchInput
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        
        <CoursesGrid>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <CourseCard key={course.id} index={index}>
                <CourseImage gradient={course.gradient} className="course-image">
                  <img src={course.image} alt={course.title} />
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
                    <EnrollButton to={`/enroll/${course.id}`}>
                      Enroll Now
                      <FiArrowRight size={16} />
                    </EnrollButton>
                  </CourseFooter>
                </CourseContent>
              </CourseCard>
            ))
          ) : (
            <NoResults>
              <h3>No courses found matching your search</h3>
              <p>Try adjusting your search terms or browse our full course catalog</p>
            </NoResults>
          )}
        </CoursesGrid>
      </Container>
    </CoursesWrapper>
  );
};